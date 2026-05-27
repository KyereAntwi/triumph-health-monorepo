import { nextConfig } from "@triumph/eslint-config/next";

export default [
  ...nextConfig,
  {
    // App-specific overrides
    rules: {
      // "no-console": "warn"
    },
  },
];
