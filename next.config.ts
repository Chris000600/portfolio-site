import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com'] // Allows Next.js Image Optimization with Cloudinary
  },
  typescript: {
    ignoreBuildErrors: true // Ignore TypeScript errors at build time
  },
  eslint: {
    ignoreDuringBuilds: true // Ignore ESLint warnings and errors at build time
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb'
    }
  }
};

export default nextConfig;
