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
);
