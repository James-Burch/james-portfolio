"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

// Honeypot component for spam protection
function HoneypotField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="hidden" aria-hidden="true">
      <label htmlFor="url">Website URL (leave blank)</label>
      <input
        type="url"
        name="url"
        id="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submissionCount, setSubmissionCount] = useState(0);
  const [honeypot, setHoneypot] = useState("");
  const [hasStartedForm, setHasStartedForm] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: "",
  });

  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Rate limiting
  const checkRateLimit = () => {
    const lastSubmission = localStorage.getItem("lastContactSubmission");
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
      const fiveMinutesInMs = 5 * 60 * 1000;
      return timeSinceLastSubmission > fiveMinutesInMs;
    }
    return true;
  };

  const getRemainingTime = () => {
    const lastSubmission = localStorage.getItem("lastContactSubmission");
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
      const fiveMinutesInMs = 5 * 60 * 1000;
      const remainingMs = fiveMinutesInMs - timeSinceLastSubmission;
      return Math.ceil(remainingMs / (60 * 1000));
    }
    return 0;
  };

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  // Track submission attempts
  useEffect(() => {
    const stored = localStorage.getItem("contactSubmissionCount");
    if (stored) {
      setSubmissionCount(parseInt(stored));
    }
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (!hasStartedForm && name !== "url") {
      setHasStartedForm(true);
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.projectType) {
      errors.projectType = "Please select an inquiry type";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Security checks
    if (!checkRateLimit()) {
      const remainingMinutes = getRemainingTime();
      setValidationErrors({
        general: `Please wait ${remainingMinutes} more minute${
          remainingMinutes !== 1 ? "s" : ""
        } before submitting again`,
      });
      return;
    }

    if (submissionCount >= 10) {
      setValidationErrors({
        general:
          "Too many submission attempts. Please contact me directly via email.",
      });
      return;
    }

    if (honeypot) {
      console.log("Honeypot triggered - likely spam submission");
      setErrorMessage(
        "There was an issue with your submission. Please try again."
      );
      return;
    }

    if (!validateForm()) {
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage(
        "Email service is not configured. Please contact me directly."
      );
      return;
    }

    setIsSubmitting(true);
    setValidationErrors({});

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not specified",
        project_type: formData.projectType,
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
        message: formData.message,
        to_email: "james@jamesburch.co.uk",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success handling
      setSubmitStatus("success");
      localStorage.setItem("lastContactSubmission", Date.now().toString());

      const newCount = submissionCount + 1;
      setSubmissionCount(newCount);
      localStorage.setItem("contactSubmissionCount", newCount.toString());

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
        timeline: "",
      });

      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 8000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");

      if (error.status === 401) {
        setErrorMessage(
          "Email service authentication failed. Please contact me directly."
        );
      } else if (error.status === 400) {
        setErrorMessage("Please check your form data and try again.");
      } else if (error.status === 402) {
        setErrorMessage(
          "Email service limit reached. Please contact me directly."
        );
      } else if (error.status === 429) {
        setErrorMessage(
          "Too many requests. Please wait a moment and try again."
        );
      } else {
        setErrorMessage(
          "Failed to send message. Please try again or contact me directly."
        );
      }

      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="contact"
      className="premium-section bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Enhanced background pattern for dark theme */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_110%)]" />

      {/* Floating shapes for dark theme */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600/15 to-purple-600/20 blur-3xl"
        animate={{ y: [-15, 15, -15], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/15 blur-2xl"
        animate={{ y: [-10, 10, -10], scale: [1.1, 1, 1.1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="premium-container relative z-10">
        {/* Header matching dark theme */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-white">
              Let's Connect
            </span>
          </motion.div>

          <h2 className="text-display mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            Ready to work together? I'd love to hear about your project and{" "}
            <span className="text-blue-400 font-semibold">
              explore how I can help bring your ideas to life
            </span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>

              <div className="space-y-4 text-gray-300">
                <p>
                  I'm currently seeking opportunities to contribute to
                  meaningful projects and continue growing as a developer.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">📧</span>
                    <a
                      href="mailto:james@jamesburch.co.uk"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      james@jamesburch.co.uk
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">💼</span>
                    <a
                      href="https://linkedin.com/in/james-burch123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      LinkedIn Profile
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-white">🔗</span>
                    <a
                      href="https://github.com/james-burch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      GitHub Profile
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">📍</span>
                    <span className="text-gray-300">Cambridge, UK</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6 mt-6">
                <h4 className="font-semibold text-white mb-3">
                  What I'm Looking For
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  {[
                    "Junior Developer Roles",
                    "Frontend Development Projects",
                    "Full-Stack Opportunities",
                    "Freelance Web Development",
                    "Collaborative Team Environment",
                  ].map((opportunity, index) => (
                    <motion.span
                      key={opportunity}
                      className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2 border border-blue-500/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      {opportunity}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot Field */}
                <HoneypotField value={honeypot} onChange={setHoneypot} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Your Name *
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                        validationErrors.name
                          ? "border-red-400 bg-red-900/20"
                          : "border-white/30"
                      }`}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      maxLength={100}
                      whileFocus={{ scale: 1.02 }}
                    />
                    {validationErrors.name && (
                      <p className="text-red-300 text-sm mt-1">
                        {validationErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                        validationErrors.email
                          ? "border-red-400 bg-red-900/20"
                          : "border-white/30"
                      }`}
                      placeholder="john@company.com"
                      disabled={isSubmitting}
                      maxLength={254}
                      whileFocus={{ scale: 1.02 }}
                    />
                    {validationErrors.email && (
                      <p className="text-red-300 text-sm mt-1">
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Company/Organization
                  </label>
                  <motion.input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your Company"
                    disabled={isSubmitting}
                    maxLength={100}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Inquiry Type *
                  </label>
                  <motion.select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white transition-all duration-300 ${
                      validationErrors.projectType
                        ? "border-red-400 bg-red-900/20"
                        : "border-white/30"
                    }`}
                    disabled={isSubmitting}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="" className="bg-gray-800">
                      Select an option...
                    </option>
                    <option value="job-opportunity" className="bg-gray-800">
                      Job Opportunity
                    </option>
                    <option value="freelance-project" className="bg-gray-800">
                      Freelance Project
                    </option>
                    <option value="collaboration" className="bg-gray-800">
                      Collaboration
                    </option>
                    <option value="consultation" className="bg-gray-800">
                      Consultation
                    </option>
                    <option value="other" className="bg-gray-800">
                      Other
                    </option>
                  </motion.select>
                  {validationErrors.projectType && (
                    <p className="text-red-300 text-sm mt-1">
                      {validationErrors.projectType}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Budget Range (if applicable)
                    </label>
                    <motion.select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white transition-all duration-300"
                      disabled={isSubmitting}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="" className="bg-gray-800">
                        Select range...
                      </option>
                      <option value="under-1k" className="bg-gray-800">
                        Under £1,000
                      </option>
                      <option value="1k-5k" className="bg-gray-800">
                        £1,000 - £5,000
                      </option>
                      <option value="5k-10k" className="bg-gray-800">
                        £5,000 - £10,000
                      </option>
                      <option value="10k-plus" className="bg-gray-800">
                        £10,000+
                      </option>
                      <option value="salary" className="bg-gray-800">
                        Salary Position
                      </option>
                      <option value="discuss" className="bg-gray-800">
                        Let's Discuss
                      </option>
                    </motion.select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Timeline
                    </label>
                    <motion.select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white transition-all duration-300"
                      disabled={isSubmitting}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="" className="bg-gray-800">
                        Select timeline...
                      </option>
                      <option value="asap" className="bg-gray-800">
                        ASAP
                      </option>
                      <option value="1-2-weeks" className="bg-gray-800">
                        1-2 weeks
                      </option>
                      <option value="1-month" className="bg-gray-800">
                        Within 1 month
                      </option>
                      <option value="2-3-months" className="bg-gray-800">
                        2-3 months
                      </option>
                      <option value="flexible" className="bg-gray-800">
                        Flexible
                      </option>
                    </motion.select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none ${
                      validationErrors.message
                        ? "border-red-400 bg-red-900/20"
                        : "border-white/30"
                    }`}
                    placeholder="Tell me about your project, opportunity, or how we might work together..."
                    disabled={isSubmitting}
                    maxLength={2000}
                    whileFocus={{ scale: 1.02 }}
                  />
                  {validationErrors.message && (
                    <p className="text-red-300 text-sm mt-1">
                      {validationErrors.message}
                    </p>
                  )}
                  <div className="text-right text-sm text-gray-400 mt-1">
                    {formData.message.length}/2000
                  </div>
                </div>

                {/* Error Messages */}
                {(validationErrors.general || errorMessage) && (
                  <div className="bg-red-900/20 border border-red-400 text-red-300 px-4 py-3 rounded-xl">
                    {validationErrors.general || errorMessage}
                  </div>
                )}

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    className="bg-green-900/20 border border-green-400 text-green-300 px-4 py-3 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you for your message! I'll get back to you within 24
                    hours.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending Message...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                <p className="text-sm text-gray-400 text-center">
                  I'll get back to you within 24 hours. For urgent inquiries,
                  feel free to email me directly.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
