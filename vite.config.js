import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        tips: resolve(__dirname, "src/tips/index.html"),
        feedback: resolve(__dirname, "src/feedback/index.html"),
        bestiary: resolve(__dirname, "src/bestiary/index.html"),
        dice: resolve(__dirname, "src/dice/index.html"),
      },
    },
  },
});
