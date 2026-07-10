import { defineConfig, defineProject } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
    },
    projects: [
      defineProject({
        test: {
          name: 'assertion-helpers',
          include: [
            'packages/assertion-helpers/**/__tests__/**/*.ts?(x)',
            'packages/assertion-helpers/**/?(*.)+(spec|test).ts?(x)',
          ],
        },
      }),
      defineProject({
        test: {
          name: 'color-helpers',
          include: [
            'packages/color-helpers/**/__tests__/**/*.ts?(x)',
            'packages/color-helpers/**/?(*.)+(spec|test).ts?(x)',
          ],
        },
      }),
      defineProject({
        test: {
          name: 'date-helpers',
          include: [
            'packages/date-helpers/**/__tests__/**/*.ts?(x)',
            'packages/date-helpers/**/?(*.)+(spec|test).ts?(x)',
          ],
        },
      }),
      defineProject({
        test: {
          name: 'exceptions',
          include: [
            'packages/exceptions/**/__tests__/**/*.ts?(x)',
            'packages/exceptions/**/?(*.)+(spec|test).ts?(x)',
          ],
        },
      }),
      defineProject({
        test: {
          name: 'storage-factory-next',
          environment: 'happy-dom',
          include: [
            'forks/storage-factory/**/__tests__/**/*.ts?(x)',
            'forks/storage-factory/**/?(*.)+(spec|test).ts?(x)',
          ],
        },
      }),
    ],
  },
});
