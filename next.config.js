/** @type {import('next').NextConfig} */
const path = require('path');
const withPWA = require('next-pwa');
const isDev = process.env.NODE_ENV === 'development';

const pwaConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: isDev,
    scope: '/app',
    sw: 'service-worker.js',
  },
  assetPrefix: isDev ? 'http://localhost:3000' : '',
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/sass/')],
  },
});

module.exports = pwaConfig;
