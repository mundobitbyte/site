import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: "../public/js/balcao", emptyOutDir: false,
    lib: { entry: "src/main.tsx", formats: ["es"], fileName: "main" },
    minify: false, sourcemap: false,
  },
  test: { environment: "jsdom" },
});
