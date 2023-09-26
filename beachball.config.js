// @ts-check
/** @type {import('beachball').BeachballConfig} */
module.exports = {
  access: 'public',
  registry: 'https://registry.npmjs.org',
  ignorePatterns: [
    '.*ignore',
    'prettier.config.cjs',
    'eslintrc.js',
    'jest.*.js',
    '.pnpm-store/**',
    '.vscode/**',
    'pnpm-lock.yaml',
  ],
};
