import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process: {
  env: {
    PORT?: string;
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  envDir: ".",
  plugins: [react()],
  base: "/",
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
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
