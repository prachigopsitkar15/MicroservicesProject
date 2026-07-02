import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Disables ESLint checks during builds
    },
    /* other config options */
};

export default nextConfig;
