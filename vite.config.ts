import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

import eslint from "vite-plugin-eslint2"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  },
  build: {
    target: "esnext"
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  },

  optimizeDeps: {
    esbuildOptions: {
      jsx: "automatic"
    }
  }
})
