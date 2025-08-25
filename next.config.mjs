/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip ESLint and TypeScript errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Basic image optimization
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // Enable compression
  compress: true,

  // Disable powered by header
  poweredByHeader: false,
};

export default nextConfig;
