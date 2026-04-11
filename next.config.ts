// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to produce static HTML/CSS/JS
  basePath: '/Portfolio', // Matches your repo name exactly
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default Image Optimization
  },
};

export default nextConfig;