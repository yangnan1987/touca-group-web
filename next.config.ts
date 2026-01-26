import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/touca-group-web',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
