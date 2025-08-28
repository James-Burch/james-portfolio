/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable image optimization for Netlify compatibility
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
  },

  // Output configuration for static export
  output: "export",
  distDir: ".next",
  trailingSlash: true,

  compress: true,
  poweredByHeader: false,

  // Ensure static assets are properly handled
  assetPrefix: "",
};

export default nextConfig;
