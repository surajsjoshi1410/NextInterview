// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // <<--- Enable Vitest's global test APIs
    environment: "jsdom", // <<--- Needed for testing browser-based code
    setupFiles: ["./src/setupTests.js"],
    // or wherever you put your test setup file
  },
});
