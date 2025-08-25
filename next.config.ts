import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization with aggressive caching
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable experimental features for performance
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@emailjs/browser",
      "react-hook-form",
    ],
    // Enable React compiler for better optimization
    reactCompiler: true,
    // Optimize server components
    serverComponentsExternalPackages: [],
    // Enable turbo mode for faster builds
    turbo: {
      rules: {
        "*.svg": ["@svgr/webpack"],
      },
    },
  },

  // Compression
  compress: true,

  // Build optimizations
  swcMinify: true,

  // Bundle analyzer for production builds
  ...(process.env.ANALYZE === "true" && {
    webpack: (config: any) => {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
        })
      );
      return config;
    },
  }),

  // Performance headers and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // Performance headers
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Aggressive caching for static assets
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Font caching
      {
        source: "/(fonts|_next/static)/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for performance (if needed)
  async redirects() {
    return [];
  },

  // Remove powered by header
  poweredByHeader: false,

  // Production optimizations
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    trailingSlash: true,
    distDir: "build",
  }),
};

export default nextConfig;
