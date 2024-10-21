import eslintConfigRightcapital from '@rightcapital/eslint-config';

const { config } = eslintConfigRightcapital.utils;

export default config(
  {
    ignores: [
      // build output
      'packages/*/lib',
    ],
  },
  ...eslintConfigRightcapital.configs.recommended,
);
