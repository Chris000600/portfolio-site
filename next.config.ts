import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true // Ignore TypeScript errors at build time
  },
  eslint: {
    ignoreDuringBuilds: true // Ignore ESLint warnings and errors at build time
  }
};

export default nextConfig;
