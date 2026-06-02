import type { NextConfig } from "next";

const BASE_PATH = "/portifolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: `${BASE_PATH}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
