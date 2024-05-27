import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(() => {
  return {
    base: "/oneflow/",
    plugins: [
      ViteImageOptimizer({
        png: {
          quality: 70,
        },
        jpeg: {
          quality: 70,
        },
        jpg: {
          quality: 70,
        },
      }),
    ],
  };
});
