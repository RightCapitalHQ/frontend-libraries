import rcPreset from '@rightcapital/eslint-config';

const { config } = rcPreset.utils;

export default config(
  {
    ignores: [
      // nx cache
      '.nx',

      // build output
      'packages/*/lib',

      // scripts
      'scripts',
    ],
  },
  ...rcPreset.configs.recommended,
  {
    files: ['packages/*/__tests__/**/*.{ts,tsx}'],
    rules: {
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          packageDir: [
            '.',
            './packages/assertion-helpers',
            './packages/color-helpers',
            './packages/date-helpers',
            './packages/exceptions',
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
