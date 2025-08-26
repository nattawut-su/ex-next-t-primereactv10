import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',

  assetPrefix: process.env.CDN_URL || undefined,

  experimental: {
    typedRoutes: true,
    optimizePackageImports: ['date-fns', 'lodash-es'],
  },

  modularizeImports: {
    'date-fns': { transform: 'date-fns/{{member}}' },
    'lodash-es': { transform: 'lodash-es/{{member}}' },
  },

  compiler: {
    removeConsole: isProd ? { exclude: ['error', 'warn'] } : false,
  },

  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [{ source: '/docs', destination: '/guide', permanent: true }];
  },

  async rewrites() {
    return [{ source: '/api/:path*', destination: 'https://api.example.com/:path*' }];
  },
};

export default nextConfig;
