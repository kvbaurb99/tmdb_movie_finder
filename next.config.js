/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TMDB_SECRET_KEY: process.env.TMDB_SECRET_KEY
  },
  images: {
    domains: ['image.tmdb.org']
  }
}

module.exports = nextConfig
