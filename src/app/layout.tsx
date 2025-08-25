import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { WebVitals } from "@/components/WebVitals";

// Optimized font loading with display:swap and preload
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Critical for CLS
  preload: true,
  variable: "--font-inter",
  // Only load the weights you actually use
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "James Burch | Full-Stack Developer & Data Scientist",
    template: "%s | James Burch - Developer Portfolio",
  },
  description:
    "Experienced full-stack developer and data scientist with 18+ months intensive training. Specializing in React, Python, machine learning, and cloud technologies. Ready to contribute from day one.",
  keywords: [
    "James Burch",
    "Full-Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Python Developer",
    "Data Scientist",
    "Machine Learning",
    "AWS Cloud Engineer",
    "TypeScript",
    "Next.js",
    "Django",
    "Portfolio",
    "UK Developer",
    "Cambridge Developer",
    "Manchester Developer",
    "Junior Developer",
    "Code Institute Graduate",
  ],
  authors: [{ name: "James Burch", url: "https://jamesburch.co.uk" }],
  creator: "James Burch",
  publisher: "James Burch",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://jamesburch.co.uk",
    siteName: "James Burch - Developer Portfolio",
    title: "James Burch | Full-Stack Developer & Data Scientist",
    description:
      "Experienced full-stack developer and data scientist with 18+ months intensive training. Specializing in React, Python, machine learning, and cloud technologies.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "James Burch - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Burch | Full-Stack Developer & Data Scientist",
    description:
      "Experienced full-stack developer and data scientist. Ready to contribute from day one.",
    images: ["/images/og-image.jpg"],
  },
  // Performance and indexing optimizations
  verification: {
    // Add your verification IDs when available
    // google: "your-google-verification-id",
    // other: "your-other-verification-id",
  },
  category: "technology",
  // Optimize for viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//api.emailjs.com" />

        {/* Preconnect to reduce connection time */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Critical CSS inline (if you have any critical above-the-fold styles) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for above-the-fold content */
              .hero-section{display:flex;align-items:center;justify-content:center;min-height:100vh}
              .hero-text{opacity:0;animation:fadeIn 0.6s ease-out forwards}
              @keyframes fadeIn{to{opacity:1}}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Critical loading indicator */}
        <div
          id="loading-indicator"
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          style={{ display: "none" }} // Start hidden to avoid flash
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>

        {children}

        {/* Web Vitals monitoring */}
        <WebVitals />

        {/* Non-critical scripts loaded after page load */}
        <Script
          id="loading-complete"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Remove loading indicator when page is ready
              if (document.readyState === 'complete') {
                const indicator = document.getElementById('loading-indicator');
                if (indicator) indicator.style.display = 'none';
              } else {
                window.addEventListener('load', function() {
                  const indicator = document.getElementById('loading-indicator');
                  if (indicator) indicator.style.display = 'none';
                });
              }
            `,
          }}
        />

        {/* Analytics (load after interaction) */}
        <Script
          id="analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              // Add your analytics code here
              // Google Analytics, etc.
            `,
          }}
        />
      </body>
    </html>
  );
}
