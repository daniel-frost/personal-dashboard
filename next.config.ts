import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
};

// next-pwa wraps webpack config, which Turbopack rejects.
// Apply only when building for production (no Turbopack in `next build` by default for plugins).
async function withMaybePWA(config: NextConfig): Promise<NextConfig> {
  if (process.env.NODE_ENV !== "production") return config;
  const mod = await import("@ducanh2912/next-pwa");
  const withPWA = mod.default({
    dest: "public",
    register: true,
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    workboxOptions: { disableDevLogs: true },
  });
  return withPWA(config);
}

export default withMaybePWA(nextConfig);
