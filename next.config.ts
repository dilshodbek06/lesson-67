import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "qkdoitqczfzrfvmuugvr.supabase.co",
      },
    ],
  },
};

export default nextConfig;
