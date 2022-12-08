/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'res.cloudinary.com', "avatars.githubusercontent.com", "github.com", "upload.wikimedia.org", "e7.pngegg.com", "play-lh.googleusercontent.com"],
  },
  output: 'standalone',
};

module.exports = withPWA(nextConfig);
