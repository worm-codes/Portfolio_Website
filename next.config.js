/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co', 'i.im.ge', 'images.unsplash.com', 't4.ftcdn.net'],
  },
};

module.exports = nextConfig;
