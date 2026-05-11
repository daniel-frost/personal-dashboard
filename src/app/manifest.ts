import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Personal Cottage",
    short_name: "Cottage",
    description: "Your cozy command-center. The wizard sleeps when you sleep.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f5efe0",
    theme_color: "#f5efe0",
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
