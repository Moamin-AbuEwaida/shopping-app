import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://moamin-abuewaida.github.io/shopping",
  plugins: [react()],
});
