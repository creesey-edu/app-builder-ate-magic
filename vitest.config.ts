import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: [
      'src/**/*.{test,spec}.{ts,tsx}',        // standard test files
      'src/**/__tests__/**/*.{ts,tsx}',       // support __tests__ folders too
    ],
    globals: true,
  },
});
