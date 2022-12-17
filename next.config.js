/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.myanimelist.net/images/anime',
    ],
  },
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
}

module.exports = nextConfig
