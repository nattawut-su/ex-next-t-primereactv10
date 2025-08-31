import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',

  typedRoutes: true,

  assetPrefix: process.env.CDN_URL || undefined,

  experimental: {
    optimizePackageImports: ['date-fns', 'lodash-es'],
  },

  compiler: {
    removeConsole: isProd ? { exclude: ['error', 'warn'] } : false,
  },

  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },

  async headers() {
    const csp = isProd
      ? [
          "default-src 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          "frame-ancestors 'self'",
          "img-src 'self' data: blob:",
          "style-src 'self' 'unsafe-inline'",
          "font-src 'self'",
          "script-src 'self'",
          "connect-src 'self' https://jsonplaceholder.typicode.com",
        ].join('; ')
      : [
          "default-src 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          "frame-ancestors 'self'",
          "img-src 'self' data: blob:",
          "style-src 'self' 'unsafe-inline'",
          "worker-src 'self'",
          "font-src 'self'",
          "script-src 'self'",
          "connect-src 'self' https://jsonplaceholder.typicode.com",
        ].join('; ');
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy-Report-Only', value: csp },
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
};

export default nextConfig;
