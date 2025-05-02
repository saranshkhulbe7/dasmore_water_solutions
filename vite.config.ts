import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), Pages(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": " ",
    },
    host: true,
  },
});
