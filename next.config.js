/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'supabase.co'],
  },
};

module.exports = nextConfig;