/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['placeholder.com', 'picsum.photos', 'images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '',
};

module.exports = nextConfig;