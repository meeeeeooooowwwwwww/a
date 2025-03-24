/** @type {import('next').NextConfig} */
// Deployment version: 2025-03-24-2
const nextConfig = {
  output: 'export',
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1a-1791.com',
      },
      {
        protocol: 'https',
        hostname: 'rumble.com',
      },
      {
        protocol: 'https',
        hostname: '*.rumble.cloud',
      },
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: 'sp.r2.cloudflarestorage.com',
      }
    ],
  },
  experimental: {
    optimizeCss: true,
  }
};

module.exports = nextConfig;