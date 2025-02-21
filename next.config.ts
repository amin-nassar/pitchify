import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*" }],
  },
  experimental: { ppr: "incremental" },
  devIndicators: { position: "bottom-left" },
};

export default nextConfig;
