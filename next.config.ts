import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/book-a-slot",
        destination: "https://growthtodo.neetocal.com/shipping-with-ai",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
