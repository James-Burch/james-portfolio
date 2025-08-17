import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  alternates: {
    canonical: "https://jamesburch.co.uk",
  },
  verification: {
    google: "your-google-search-console-verification-code",
  },
  category: "technology",
  other: {
    "application-name": "James Burch Portfolio",
    "apple-mobile-web-app-title": "James Burch",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0070f3",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#0070f3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
          `}
        </Script>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "James Burch",
              url: "https://jamesburch.co.uk",
              sameAs: [
                "https://linkedin.com/in/james-burch123",
                "https://github.com/James-Burch",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              address: {
                "@type": "PostalAddress",
                addressRegion: "Cambridgeshire",
                addressCountry: "GB",
              },
              email: "james@jamesburch.co.uk",
              knowsAbout: [
                "Full-Stack Development",
                "React",
                "TypeScript",
                "Python",
                "Django",
                "Machine Learning",
                "Data Science",
                "AWS Cloud Services",
                "Frontend Development",
                "Backend Development",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Code Institute",
              },
            }),
          }}
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS prefetch for EmailJS */}
        <link rel="dns-prefetch" href="//api.emailjs.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
