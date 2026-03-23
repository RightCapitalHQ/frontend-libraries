import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
    },
  },
});
