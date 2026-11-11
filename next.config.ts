import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel's image optimizer bills one transformation per image width per
  // deployment. Every photo here is already sized, so serve it from the CDN.
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
