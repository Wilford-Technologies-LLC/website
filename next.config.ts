import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages で配信するため静的 HTML として書き出す
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
