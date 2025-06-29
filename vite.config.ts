import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { analyzer } from "vite-bundle-analyzer";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const enableSourceMap = env.VITE_ENABLE_SOURCEMAP === "true";
  
  return {
    plugins: [
      react(),
      tailwindcss(),
      analyzer({
        openAnalyzer: false,
      }),
    ],
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
      sourcemap: enableSourceMap,
    },
  };
});
