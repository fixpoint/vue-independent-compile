import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/library-entry.ts"),
      name: "MyLib",
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
