/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  images: {
    domains: ['meienberger.dev'],
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
}

module.exports = nextConfig 