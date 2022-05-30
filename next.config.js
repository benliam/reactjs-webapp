/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', '0.0.0.0:3000']
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'http://blog.benztattoo.ink',
        permanent: true
      },
    ]
  },
}

module.exports = nextConfig
