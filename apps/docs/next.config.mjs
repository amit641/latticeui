/** @type {import('next').NextConfig} */

// Base path is empty for local dev and set to "/latticeui" in CI so the site
// works when served from https://<user>.github.io/latticeui.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  transpilePackages: ["latticeui", "latticeui-core", "latticeui-tokens"],
  // Emit a fully static site (out/) for GitHub Pages.
  output: "export",
  // Each route becomes <route>/index.html so Pages serves nested URLs correctly.
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
