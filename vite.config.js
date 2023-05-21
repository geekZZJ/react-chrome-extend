import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "extension",
    rollupOptions: {
      output: {
        entryFileNames: "static/[name].js",
        assetFileNames: "static/[name].[ext]",
      },
    },
  },
});
