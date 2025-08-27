/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip ESLint and TypeScript errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable image optimization for Netlify (causes issues)
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
  },

  // Output for static hosting
  output: "export",
  trailingSlash: true,
  distDir: ".next",

  // Enable compression
  compress: true,

  // Disable powered by header
  poweredByHeader: false,
};

export default nextConfig;
