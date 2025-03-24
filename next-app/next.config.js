/** @type {import('next').NextConfig} */
// Deployment version: 2025-03-24-2
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
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
    // Optimize image loading
    minimumCacheTTL: 60,
    formats: ['image/webp'],
  },
  experimental: {
    // Enable optimizations
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react'],
  },
  webpack: (config, { isServer }) => {
    // Silence the punycode deprecation warning
    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ }
    ];

    if (!isServer) {
      // Optimize client-side chunks
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          maxSize: 1000000, // 1MB max per chunk
          minSize: 30000,   // 30KB min per chunk
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };

      // Add module concatenation optimization
      config.optimization.concatenateModules = true;

      // Add runtime chunk optimization
      config.optimization.runtimeChunk = {
        name: 'runtime',
      };
    }

    return config;
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
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
};

module.exports = nextConfig;