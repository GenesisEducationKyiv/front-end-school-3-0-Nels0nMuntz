import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

const chunks = [
  {
    test: /[\\/]node_modules[\\/](react)[\\/]/,
    name: "vendor-react",
  },
  {
    test: /[\\/]node_modules[\\/](react-dom|react-router-dom)[\\/]/,
    name: "vendor-react-router",
  },
  {
    test: /[\\/]node_modules[\\/](zod)[\\/]/,
    name: "vendor-zod",
  },
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              for (const chunk of chunks) {
                if (chunk.test.test(id)) {
                  return chunk.name;
                }
              }
            }
          },
        },
      },
    },
});
