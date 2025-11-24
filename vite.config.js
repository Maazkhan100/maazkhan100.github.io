import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",    // FIXED — root base for username.github.io sites
  plugins: [react()],
});
