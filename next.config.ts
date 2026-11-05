import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Ship client source maps so large first-party chunks (e.g. the 3D logo's
  // three.js bundle) are debuggable in prod DevTools; maps aren't fetched by
  // visitors' browsers unless DevTools is open, so this doesn't affect
  // real-world load performance.
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      // The dedicated healthcare industry page was folded into general site
      // content (home, services, about) so the site doesn't read as
      // healthcare-exclusive. Redirect any existing links/bookmarks/search
      // results for the old URL to Services instead of 404ing.
      {
        source: "/industries/healthcare",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
