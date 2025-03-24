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
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
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
    }
    return config;
  },
};

module.exports = nextConfig;