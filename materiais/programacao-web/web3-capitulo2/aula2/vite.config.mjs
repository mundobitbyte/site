import { defineConfig } from "vite";

export default defineConfig({
  publicDir: false,
  build: {
    outDir: "../public/js/balcao",
    emptyOutDir: false,
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
      fileName: "main",
    },
    minify: false,
    sourcemap: false,
  },
});

