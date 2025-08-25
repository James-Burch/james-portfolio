// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import emailjs from "@emailjs/browser";

// // Security Hook: Rate Limiting
// const useRateLimit = () => {
//   const [lastSubmission, setLastSubmission] = useState<number | null>(null);
//   const RATE_LIMIT_MINUTES = 5; // 5 minutes between submissions

//   useEffect(() => {
//     // Load last submission time from localStorage
//     const stored = localStorage.getItem("lastContactSubmission");
//     if (stored) {
//       setLastSubmission(parseInt(stored));
//     }
//   }, []);

//   const checkRateLimit = () => {
//     if (!lastSubmission) return true;

//     const now = Date.now();
//     const timeDiff = now - lastSubmission;
//     const minutesDiff = timeDiff / (1000 * 60);

//     return minutesDiff >= RATE_LIMIT_MINUTES;
//   };

//   const updateLastSubmission = () => {
//     const now = Date.now();
//     setLastSubmission(now);
//     localStorage.setItem("lastContactSubmission", now.toString());
//   };

//   const getRemainingTime = () => {
//     if (!lastSubmission) return 0;

//     const now = Date.now();
//     const timeDiff = now - lastSubmission;
//     const minutesDiff = timeDiff / (1000 * 60);
//     const remaining = RATE_LIMIT_MINUTES - minutesDiff;

//     return Math.max(0, Math.ceil(remaining));
//   };

//   return {
//     checkRateLimit,
//     updateLastSubmission,
//     getRemainingTime,
//     RATE_LIMIT_MINUTES,
//   };
// };

// // FIXED Security Component: Better Honeypot Field
// const HoneypotField = ({
//   value,
//   onChange,
// }: {
//   value: string;
//   onChange: (value: string) => void;
// }) => (
//   <div
//     style={{
//       position: "absolute",
//       left: "-9999px",
//       top: "-9999px",
//       opacity: 0,
//       pointerEvents: "none",
//       height: 0,
//       overflow: "hidden",
//     }}
//     aria-hidden="true"
//   >
//     <label htmlFor="url-field">Website (leave blank)</label>
//     <input
//       id="url-field"
//       type="text"
//       name="url" // Changed from "website" to avoid autofill
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       tabIndex={-1}
//       autoComplete="new-password" // Prevents autofill
//       placeholder=""
//     />
//   </div>
// );

// // Enhanced Validation Function (FIXED - less aggressive)
// const enhancedValidateForm = (formData: any, honeypot: string) => {
//   const errors: { [key: string]: string } = {};

//   // 1. HONEYPOT CHECK - Only trigger if actually filled by user
//   if (honeypot.trim() !== "") {
//     // Add a small delay to check if it was filled by autofill vs user
//     setTimeout(() => {
//       console.warn("Honeypot triggered:", honeypot);
//     }, 100);

//     // Only block if honeypot contains suspicious content
//     if (
//       honeypot.length > 0 &&
//       (honeypot.includes("http") ||
//         honeypot.includes("www.") ||
//         honeypot.length > 50)
//     ) {
//       errors.honeypot = "Suspicious activity detected";
//       return { isValid: false, errors };
//     }
//   }

//   // 2. NAME VALIDATION (more lenient)
//   if (!formData.name.trim()) {
//     errors.name = "Name is required";
//   } else if (formData.name.trim().length < 2) {
//     errors.name = "Name must be at least 2 characters";
//   } else if (formData.name.trim().length > 100) {
//     errors.name = "Name must be less than 100 characters";
//   }

//   // 3. EMAIL VALIDATION
//   if (!formData.email.trim()) {
//     errors.email = "Email is required";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//     errors.email = "Please enter a valid email address";
//   } else if (formData.email.length > 254) {
//     errors.email = "Email address is too long";
//   }

//   // 4. COMPANY VALIDATION (optional field)
//   if (formData.company && formData.company.length > 100) {
//     errors.company = "Company name must be less than 100 characters";
//   }

//   // 5. PROJECT TYPE VALIDATION
//   const validProjectTypes = [
//     "Job Opportunity",
//     "Freelance Project",
//     "Collaboration",
//     "General Inquiry",
//   ];
//   if (!formData.projectType) {
//     errors.projectType = "Please select an inquiry type";
//   } else if (!validProjectTypes.includes(formData.projectType)) {
//     errors.projectType = "Invalid inquiry type selected";
//   }

//   // 6. MESSAGE VALIDATION (less aggressive spam detection)
//   if (!formData.message.trim()) {
//     errors.message = "Message is required";
//   } else if (formData.message.trim().length < 10) {
//     errors.message = "Message must be at least 10 characters long";
//   } else if (formData.message.trim().length > 2000) {
//     errors.message = "Message must be less than 2000 characters";
//   } else {
//     // LIGHTER SPAM DETECTION
//     const messageText = formData.message.toLowerCase();

//     // Only check for excessive URLs (more than 3)
//     const urlMatches = messageText.match(/https?:\/\/[^\s]+/g);
//     if (urlMatches && urlMatches.length > 3) {
//       errors.message = "Message contains too many links";
//     }

//     // Only check for obvious spam patterns
//     if (/(.)\1{20,}/.test(messageText)) {
//       errors.message = "Message contains excessive repeated characters";
//     }
//   }

//   return {
//     isValid: Object.keys(errors).length === 0,
//     errors,
//   };
// };

// export default function SecureContact() {
//   const ref = useRef(null);
//   const formRef = useRef<HTMLFormElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     projectType: "",
//     message: "",
//   });

//   // Security state
//   const [honeypot, setHoneypot] = useState("");
//   const [submissionCount, setSubmissionCount] = useState(0);
//   const [hasStartedForm, setHasStartedForm] = useState(false);

//   // UI state
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<
//     "idle" | "success" | "error"
//   >("idle");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [validationErrors, setValidationErrors] = useState<{
//     [key: string]: string;
//   }>({});

//   // Security hooks
//   const { checkRateLimit, updateLastSubmission, getRemainingTime } =
//     useRateLimit();

//   // EmailJS configuration
//   const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
//   const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
//   const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

//   const projectTypes = [
//     "Job Opportunity",
//     "Freelance Project",
//     "Collaboration",
//     "General Inquiry",
//   ];

//   const contactInfo = [
//     {
//       icon: "📧",
//       label: "Email",
//       value: "james@jamesburch.co.uk",
//       href: "mailto:james@jamesburch.co.uk",
//       color: "blue",
//     },
//     {
//       icon: "💼",
//       label: "LinkedIn",
//       value: "linkedin.com/in/james-burch123",
//       href: "https://linkedin.com/in/james-burch123",
//       color: "purple",
//     },
//     {
//       icon: "🚀",
//       label: "GitHub",
//       value: "github.com/James-Burch",
//       href: "https://github.com/James-Burch",
//       color: "green",
//     },
//     {
//       icon: "📍",
//       label: "Location",
//       value: "Cambridgeshire/Manchester",
//       href: null,
//       color: "orange",
//     },
//   ];

//   const opportunities = [
//     "Junior Developer Roles",
//     "Frontend Web Developer Roles",
//     "AWS Cloud Engineer",
//     "Freelance Projects",
//   ];

//   const getColorClasses = (color: string) => {
//     const colors = {
//       blue: {
//         bg: "bg-blue-600",
//         text: "text-blue-600",
//         light: "bg-blue-50",
//         border: "border-blue-200",
//       },
//       purple: {
//         bg: "bg-purple-600",
//         text: "text-purple-600",
//         light: "bg-purple-50",
//         border: "border-purple-200",
//       },
//       green: {
//         bg: "bg-emerald-600",
//         text: "text-emerald-600",
//         light: "bg-emerald-50",
//         border: "border-emerald-200",
//       },
//       orange: {
//         bg: "bg-orange-600",
//         text: "text-orange-600",
//         light: "bg-orange-50",
//         border: "border-orange-200",
//       },
//     };
//     return colors[color as keyof typeof colors] || colors.blue;
//   };

//   // Initialize EmailJS
//   useEffect(() => {
//     if (EMAILJS_PUBLIC_KEY) {
//       emailjs.init(EMAILJS_PUBLIC_KEY);
//     }
//   }, [EMAILJS_PUBLIC_KEY]);

//   // Track submission attempts (additional security)
//   useEffect(() => {
//     const stored = localStorage.getItem("contactSubmissionCount");
//     if (stored) {
//       setSubmissionCount(parseInt(stored));
//     }
//   }, []);

//   // Clear honeypot field after component mounts (in case of autofill)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (honeypot && !hasStartedForm) {
//         console.log("Clearing autofilled honeypot field");
//         setHoneypot("");
//       }
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [honeypot, hasStartedForm]);

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;

//     // Track that user has started interacting with form
//     if (!hasStartedForm && name !== "url") {
//       setHasStartedForm(true);
//     }

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     // Clear validation error for this field when user starts typing
//     if (validationErrors[name]) {
//       setValidationErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     // SECURITY CHECK 1: Rate Limiting
//     if (!checkRateLimit()) {
//       const remainingMinutes = getRemainingTime();
//       setValidationErrors({
//         general: `Please wait ${remainingMinutes} more minute${
//           remainingMinutes !== 1 ? "s" : ""
//         } before submitting again`,
//       });
//       return;
//     }

//     // SECURITY CHECK 2: Submission count (prevent excessive attempts)
//     if (submissionCount >= 10) {
//       // Increased from 5 to 10
//       setValidationErrors({
//         general:
//           "Too many submission attempts. Please contact me directly via email.",
//       });
//       return;
//     }

//     // SECURITY CHECK 3: Enhanced validation (now less aggressive)
//     const validation = enhancedValidateForm(formData, honeypot);
//     if (!validation.isValid) {
//       setValidationErrors(validation.errors);

//       // If honeypot detected, log but don't always block
//       if (validation.errors.honeypot) {
//         console.warn("Potential bot detected, but allowing submission");
//         // Remove honeypot error and continue with submission
//         delete validation.errors.honeypot;
//         if (Object.keys(validation.errors).length === 0) {
//           // Continue with submission if no other errors
//         } else {
//           return;
//         }
//       } else {
//         return;
//       }
//     }

//     setIsSubmitting(true);
//     setValidationErrors({});
//     setSubmitStatus("idle");
//     setErrorMessage("");

//     try {
//       // SECURITY CHECK 4: EmailJS Configuration validation
//       if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
//         throw new Error("Email service configuration is missing");
//       }

//       // Prepare secure template parameters
//       const templateParams = {
//         from_name: formData.name.trim(),
//         from_email: formData.email.trim(),
//         company: formData.company.trim() || "Not specified",
//         inquiry_type: formData.projectType,
//         message: formData.message.trim(),
//         to_name: "James Burch",
//         reply_to: formData.email.trim(),
//         // Security info for your reference
//         submission_time: new Date().toISOString(),
//         honeypot_value: honeypot ? "FILLED" : "EMPTY", // Track honeypot status
//       };

//       console.log("Sending email with params:", {
//         ...templateParams,
//         honeypot_triggered: honeypot ? true : false,
//       });

//       // Send email using EmailJS
//       const result = await emailjs.send(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         templateParams,
//         EMAILJS_PUBLIC_KEY
//       );

//       if (result.status === 200) {
//         // SUCCESS: Update security tracking
//         updateLastSubmission();
//         setSubmissionCount((prev) => {
//           const newCount = prev + 1;
//           localStorage.setItem("contactSubmissionCount", newCount.toString());
//           return newCount;
//         });

//         setSubmitStatus("success");
//         setFormData({
//           name: "",
//           email: "",
//           company: "",
//           projectType: "",
//           message: "",
//         });
//         setHoneypot(""); // Reset honeypot
//         setHasStartedForm(false);

//         setTimeout(() => setSubmitStatus("idle"), 5000);
//       } else {
//         throw new Error("Failed to send email");
//       }
//     } catch (error: any) {
//       console.error("EmailJS Error:", error);
//       setSubmitStatus("error");

//       // Provide user-friendly error messages
//       if (error.message.includes("configuration")) {
//         setErrorMessage(
//           "Email service configuration error. Please contact me directly."
//         );
//       } else if (error.status === 400) {
//         setErrorMessage("Please check your form data and try again.");
//       } else if (error.status === 402) {
//         setErrorMessage(
//           "Email service limit reached. Please contact me directly."
//         );
//       } else if (error.status === 429) {
//         setErrorMessage(
//           "Too many requests. Please wait a moment and try again."
//         );
//       } else {
//         setErrorMessage(
//           "Failed to send message. Please try again or contact me directly."
//         );
//       }

//       setTimeout(() => {
//         setSubmitStatus("idle");
//         setErrorMessage("");
//       }, 8000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut" as const,
//       },
//     },
//   };

//   return (
//     <section
//       id="contact"
//       className="premium-section bg-gradient-to-br from-gray-50 via-white to-blue-50/50 relative overflow-hidden"
//       ref={ref}
//     >
//       {/* Background elements */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_20%,transparent_110%)]" />

//       {/* Floating shapes */}
//       <motion.div
//         className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/8 to-purple-400/10 blur-xl"
//         animate={{ y: [-10, 10, -10] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/8 blur-xl"
//         animate={{ y: [-8, 8, -8] }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2,
//         }}
//       />

//       <div className="premium-container relative z-10">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={
//               isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
//             }
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="relative">
//               <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
//               <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
//             </div>
//             <span className="text-sm font-medium text-gray-700">
//               Ready to Connect
//             </span>
//           </motion.div>

//           <h2 className="text-display mb-6">
//             <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
//               Let's Work Together
//             </span>
//           </h2>
//           <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
//             Ready to contribute from day one. Let's discuss how I can{" "}
//             <span className="text-blue-700 font-semibold">
//               help your team succeed
//             </span>
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-5 gap-12 items-start">
//           {/* Contact Information */}
//           <motion.div
//             className="lg:col-span-2 space-y-8"
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             <motion.div
//               className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl"
//               variants={itemVariants}
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Get In Touch
//               </h3>
//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 I'm actively seeking junior developer, frontend developer, or
//                 cloud engineer opportunities. Whether you have a role, freelance
//                 project, or just want to connect, I'd love to hear from you.
//               </p>

//               <div className="space-y-6">
//                 {contactInfo.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className="group flex items-center space-x-4"
//                     variants={itemVariants}
//                     whileHover={{ x: 5 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <div
//                       className={`w-12 h-12 ${
//                         getColorClasses(item.color).light
//                       } ${
//                         getColorClasses(item.color).border
//                       } border-2 rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
//                     >
//                       {item.icon}
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">{item.label}</p>
//                       {item.href ? (
//                         <a
//                           href={item.href}
//                           target={
//                             item.href.startsWith("http") ? "_blank" : undefined
//                           }
//                           rel={
//                             item.href.startsWith("http")
//                               ? "noopener noreferrer"
//                               : undefined
//                           }
//                           className={`${
//                             getColorClasses(item.color).text
//                           } hover:opacity-80 transition-opacity duration-200 text-sm`}
//                         >
//                           {item.value}
//                         </a>
//                       ) : (
//                         <p className="text-gray-600 text-sm">{item.value}</p>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Opportunities */}
//             <motion.div
//               className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl"
//               variants={itemVariants}
//             >
//               <h4 className="font-bold text-gray-900 mb-6">Interested In</h4>
//               <div className="flex flex-wrap gap-3">
//                 {opportunities.map((opportunity, index) => (
//                   <motion.span
//                     key={index}
//                     className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-all duration-300"
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={
//                       isInView
//                         ? { opacity: 1, scale: 1 }
//                         : { opacity: 0, scale: 0.8 }
//                     }
//                     transition={{ delay: index * 0.1 + 0.8 }}
//                   >
//                     {opportunity}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Fixed Contact Form */}
//           <motion.div
//             className="lg:col-span-3"
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <div className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl">
//               <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//                 {/* FIXED: Better Honeypot Field */}
//                 <HoneypotField value={honeypot} onChange={setHoneypot} />

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Your Name *
//                     </label>
//                     <motion.input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
//                         validationErrors.name
//                           ? "border-red-300 bg-red-50"
//                           : "border-gray-300"
//                       }`}
//                       placeholder="John Doe"
//                       disabled={isSubmitting}
//                       maxLength={100}
//                       whileFocus={{ scale: 1.02 }}
//                     />
//                     {validationErrors.name && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {validationErrors.name}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Email Address *
//                     </label>
//                     <motion.input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
//                         validationErrors.email
//                           ? "border-red-300 bg-red-50"
//                           : "border-gray-300"
//                       }`}
//                       placeholder="john@company.com"
//                       disabled={isSubmitting}
//                       maxLength={254}
//                       whileFocus={{ scale: 1.02 }}
//                     />
//                     {validationErrors.email && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {validationErrors.email}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Company/Organization
//                   </label>
//                   <motion.input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
//                       validationErrors.company
//                         ? "border-red-300 bg-red-50"
//                         : "border-gray-300"
//                     }`}
//                     placeholder="Your Company"
//                     disabled={isSubmitting}
//                     maxLength={100}
//                     whileFocus={{ scale: 1.02 }}
//                   />
//                   {validationErrors.company && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {validationErrors.company}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Inquiry Type *
//                   </label>
//                   <motion.select
//                     name="projectType"
//                     value={formData.projectType}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 ${
//                       validationErrors.projectType
//                         ? "border-red-300 bg-red-50"
//                         : "border-gray-300"
//                     }`}
//                     disabled={isSubmitting}
//                     whileFocus={{ scale: 1.02 }}
//                   >
//                     <option value="">Select an option</option>
//                     {projectTypes.map((type) => (
//                       <option key={type} value={type}>
//                         {type}
//                       </option>
//                     ))}
//                   </motion.select>
//                   {validationErrors.projectType && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {validationErrors.projectType}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Message *
//                   </label>
//                   <motion.textarea
//                     name="message"
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 resize-none ${
//                       validationErrors.message
//                         ? "border-red-300 bg-red-50"
//                         : "border-gray-300"
//                     }`}
//                     placeholder="Tell me about your opportunity or project..."
//                     disabled={isSubmitting}
//                     maxLength={2000}
//                     whileFocus={{ scale: 1.02 }}
//                   />
//                   <div className="flex justify-between items-center mt-1">
//                     {validationErrors.message && (
//                       <p className="text-red-500 text-sm">
//                         {validationErrors.message}
//                       </p>
//                     )}
//                     <p
//                       className={`text-sm ml-auto ${
//                         formData.message.length > 1800
//                           ? "text-orange-600"
//                           : "text-gray-500"
//                       }`}
//                     >
//                       {formData.message.length}/2000 characters
//                     </p>
//                   </div>
//                 </div>

//                 {/* Rate limit error display */}
//                 {validationErrors.general && (
//                   <div className="text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-200">
//                     <div className="flex items-center space-x-2">
//                       <svg
//                         className="w-5 h-5"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <span className="font-semibold">
//                         {validationErrors.general}
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting || !checkRateLimit()}
//                   className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
//                   whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
//                   whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg
//                         className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Sending Message...
//                     </>
//                   ) : !checkRateLimit() ? (
//                     <>
//                       <svg
//                         className="w-5 h-5 mr-2"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       Wait {getRemainingTime()} minute
//                       {getRemainingTime() !== 1 ? "s" : ""}
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <motion.svg
//                         className="w-5 h-5 ml-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         animate={{ x: [0, 3, 0] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                         />
//                       </motion.svg>
//                     </>
//                   )}
//                 </motion.button>

//                 {/* Status Messages */}
//                 {submitStatus === "success" && (
//                   <motion.div
//                     className="text-green-600 text-center bg-green-50 border border-green-200 rounded-xl p-4"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className="flex items-center justify-center space-x-2">
//                       <svg
//                         className="w-5 h-5"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <span className="font-semibold">
//                         Thank you! Your message has been sent successfully.
//                       </span>
//                     </div>
//                     <p className="text-sm mt-2">
//                       I'll get back to you within 24 hours.
//                     </p>
//                   </motion.div>
//                 )}

//                 {submitStatus === "error" && (
//                   <motion.div
//                     className="text-red-600 text-center bg-red-50 border border-red-200 rounded-xl p-4"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className="flex items-center justify-center space-x-2">
//                       <svg
//                         className="w-5 h-5"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <span className="font-semibold">
//                         Sorry, there was an error sending your message.
//                       </span>
//                     </div>
//                     {errorMessage && (
//                       <p className="text-sm mt-2">{errorMessage}</p>
//                     )}
//                     <p className="text-sm mt-2">
//                       Please try again or contact me directly at{" "}
//                       <a
//                         href="mailto:james@jamesburch.co.uk"
//                         className="underline hover:no-underline"
//                       >
//                         james@jamesburch.co.uk
//                       </a>
//                     </p>
//                   </motion.div>
//                 )}
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
