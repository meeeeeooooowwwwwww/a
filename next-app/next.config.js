/** @type {import('next').NextConfig} */
// Deployment version: 2025-03-24
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  reactStrictMode: true,
  images: {
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "connect-src 'self' https://rumble.com https://*.rumble.cloud https://my-video-worker.generalflynn17.workers.dev",
              "img-src 'self' https://*.r2.cloudflarestorage.com",
              "style-src 'self' 'unsafe-inline'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "frame-src 'self' https://rumble.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Silence the punycode deprecation warning
    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ }
    ];
    return config;
  },
};

module.exports = nextConfig;