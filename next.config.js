/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co', 'i.im.ge', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
