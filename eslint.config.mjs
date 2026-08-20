import rcPreset from '@rightcapital/eslint-config';

const { defineConfig } = rcPreset.utils;

export default defineConfig(
  {
    ignores: [
      // nx cache
      '.nx',

      // build output
      'packages/*/lib',
      'forks/*/lib',

      // scripts
      'scripts',
    ],
  },
  ...rcPreset.configs.recommended,
  {
    files: [
      'packages/*/__tests__/**/*.{ts,tsx}',
      'forks/*/__tests__/**/*.{ts,tsx}',
    ],
    rules: {
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          packageDir: [
            '.',
            './packages/assert',
            './packages/color-helpers',
            './packages/date-helpers',
            './packages/exceptions',
            './forks/storage-factory',
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,cts,mts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.ts'],
        },
      },
    },
  },
);
