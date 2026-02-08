/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codestyle-web.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-itm1-1.cdninstagram.com',
      },
    ],
  },
}

module.exports = nextConfig