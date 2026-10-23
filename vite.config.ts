import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  hmrGate: false,
  tanstackStart: {
    server: { entry: "server" },
  },
});
