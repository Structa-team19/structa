import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["chrome"],
      input: {
        index: path.resolve(__dirname, "index.html"),
        "service-worker": path.resolve(
          __dirname,
          "src/app/extension/service-worker.ts",
        ),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (["service-worker"].includes(chunkInfo.name)) {
            return "[name].js";
          }
          return "[name]-[hash].js";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
