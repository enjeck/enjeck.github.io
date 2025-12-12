/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static site generation (GitHub Pages)
  basePath: '', // Add '/repo-name' if not using custom domain
  images: {
    unoptimized: true, // Required for static export
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

export default nextConfig
