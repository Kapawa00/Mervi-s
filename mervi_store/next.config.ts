// next.config.mjs (ou next.config.js)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Si tu as des images dans ton projet (utile pour un e‑commerce)
  images: {
    domains: [
      "example.com", // remplace par ton domaine d’images
      "images.unsplash.com",
      // ajoute tes CDN/images ici
    ],
  },

  // Optionnel : si tu veux custom server/env, reste à ajuster
};

export default nextConfig;