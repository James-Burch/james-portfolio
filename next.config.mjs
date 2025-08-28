/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Remove these lines that are causing the conflict:
  // output: 'export',
  // trailingSlash: true,
  
  images: {
    formats: ["image/webp", "image/avif"],
  },

  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
