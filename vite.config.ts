import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  serverFnErrorLogger: false,
  ssrErrorLogger: false,
  hmrGate: false,
  tanstackStart: {
    server: { entry: "server" },
  },
});
