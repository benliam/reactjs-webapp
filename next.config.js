/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["nextjs-components","react-datetime-picker"]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', '0.0.0.0:3000']
  },
  env: {
    NEXT_PUBLIC_SUPABASE_SERVICE_ADMIN_ROLE_KEY: `${process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ADMIN_ROLE_KEY}`,
    SUPABASE_SERVICE_ADMIN_ROLE_KEY: `${process.env.SUPABASE_SERVICE_ADMIN_ROLE_KEY}`
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

module.exports = withTM(nextConfig)
