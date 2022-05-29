/** @type {import('next').NextConfig} */
const path = require('path');
const withPWA = require('next-pwa');

const pwaConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space'],
    formats: ['image/webp'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/sass/')],
  },
});

module.exports = pwaConfig;
