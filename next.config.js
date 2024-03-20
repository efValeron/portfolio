/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  // experimental: {
  //   serverActions: {
  //     allowedOrigins: ['http://localhost:3000/studio/desk', 'https://devaleron.vercel.app/studio/desk'],
  //   },
  // },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
}