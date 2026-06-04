import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePrerender from "vite-plugin-prerender";
import path from "path";

const Renderer = vitePrerender.PuppeteerRenderer;
const puppeteerExecutablePath = process.env.PUPPETEER_EXECUTABLE_PATH;

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/terrasse",
        "/jardin",
        "/parking",
        "/photos-region",
        "/contact",
        "/a-visiter",
        "/interieur",
        "/interieur/chambre",
        "/interieur/piece-a-vivre",
        "/interieur/salle-de-bain",
        "/informations",
        "/informations/calendrier",
        "/informations/tarifs",
        "/informations/contrat",
        "/informations/commentaires",
        "/informations/producteurs",
        "/traductions",
        "/traductions/english",
        "/traductions/deutsch",
      ],
      renderer: new Renderer({
        headless: true,
        ...(puppeteerExecutablePath
          ? { executablePath: puppeteerExecutablePath }
          : {}),
      }),
    }),
  ],
  base: "/",
});
