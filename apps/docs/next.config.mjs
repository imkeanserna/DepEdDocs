/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
