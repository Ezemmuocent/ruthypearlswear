import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || "";
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || basePath || "";

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
