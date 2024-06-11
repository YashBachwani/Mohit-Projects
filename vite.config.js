import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import { DEFAULT_OPTIONS } from "./config/optimizer";
import { resolve } from "path";

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          about: resolve(__dirname, "pages/about.html"),
          workwithmohit: resolve(__dirname, "pages/workwithmohit.html"),
          testimonials: resolve(__dirname, "pages/testimonials.html"),
        },
      },
    },
    plugins: [
      ViteImageOptimizer({
        DEFAULT_OPTIONS,
      }),
    ],
  };
});
