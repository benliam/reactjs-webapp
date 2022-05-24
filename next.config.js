/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', '0.0.0.0:3000']
  }
}

module.exports = nextConfig
