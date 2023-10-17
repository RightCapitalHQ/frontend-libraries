/**
 * @type {import('jest').Config}
 */
module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
};
