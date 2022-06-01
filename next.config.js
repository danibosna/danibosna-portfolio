/** @type {import('next').NextConfig} */
const path = require('path');
const withPWA = require('next-pwa');

const pwaConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: process.env.NODE_ENV === 'development',
    scope: '/app',
    sw: 'service-worker.js',
  },
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/sass/')],
  },
});

module.exports = pwaConfig;
