import rcPreset from '@rightcapital/eslint-config';

const { config } = rcPreset.utils;

export default config(
  {
    ignores: [
      // build output
      'packages/*/lib',
    ],
  },
  ...rcPreset.configs.recommended,
);
