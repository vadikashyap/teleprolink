import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.lottie"],
  server: {
    host: true, // (optional) allow LAN access
    allowedHosts: ["f6c7-45-250-44-129.ngrok-free.app"],
  },
  plugins: [react(), tailwindcss()],
});
