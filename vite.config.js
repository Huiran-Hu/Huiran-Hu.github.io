import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  /** 用户页 https://<user>.github.io/ 根路径部署 */
  base: "/",
  plugins: [tailwindcss(), react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
