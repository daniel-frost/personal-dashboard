import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    description: "Your cozy command-center. The wizard sleeps when you sleep.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fafafa",
    theme_color: "#fafafa",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
