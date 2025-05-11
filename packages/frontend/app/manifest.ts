import type { MetadataRoute } from "next";
import { CHAIN_NAME } from "@/utils/chains";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "XPad - Memecoin launchpad",
    short_name: "XPad",
    description: `The place for memecoins on ${CHAIN_NAME}. No hassle, no limits. Just vibes. Make it happen or don’t—your call.`,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/favicons/site-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/favicons/site-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
