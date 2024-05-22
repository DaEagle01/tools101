/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')()

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  }
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "gcdnb.pbrd.co",
      },
      {
        protocol: "https",
        hostname: "fakeimg.pl",
      },
      {
        protocol: "https",
        hostname: "testadmin.tools121.com",
      },
    ],
  },
};


module.exports = process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : withPWA(nextConfig)