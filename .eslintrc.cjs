/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      // source files
      files: ['./packages/*/src/**/*.{ts,cts,mts}'],
      extends: ['@rightcapital/typescript'],
      env: { browser: true },
    },
    {
      // config, scripts in JavaScript
      files: ['**/*.{js,cjs,mjs,jsx}'],
      excludedFiles: ['./packages/*/src/**'],
      extends: ['@rightcapital/javascript'],
      env: { node: true },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      // config, scripts in TypeScript
      files: ['**/*.{ts,cts,mts,tsx}'],
      excludedFiles: ['./packages/*/src/**'],
      extends: ['@rightcapital/typescript'],
      env: { node: true },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      files: ['**/*.mts'],
      rules: {
        /**
         * import plugin cannot correctly handle ESM modules
         * https://github.com/import-js/eslint-plugin-import/issues/2729
         */
        'import/extensions': 'off',
      },
    },
  ],
};
