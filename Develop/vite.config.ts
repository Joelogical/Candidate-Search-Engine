import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  plugins: [react()],
  base: "/",
  server: {
    port: Number(process.env.PORT) || 5173,
    host: true,
  },
  preview: {
    port: Number(process.env.PORT) || 5173,
    host: true,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: ["candidate-search-engine.onrender.com", "localhost"],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
});
