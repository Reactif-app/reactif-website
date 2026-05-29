import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        support: resolve(__dirname, "support/index.html"),
        confidentialite: resolve(__dirname, "confidentialite/index.html"),
      },
    },
  },
});
