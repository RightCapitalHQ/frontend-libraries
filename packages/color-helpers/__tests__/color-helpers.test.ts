import { ColorHelpers, BrightnessDirection } from '../src/color-helpers';

describe('@rightcapital/color-helpers', () => {
  test('Test getHighContrastContentOnBackgroundColor color result', () => {
    expect(
      ColorHelpers.getHighContrastContentOnBackgroundColor('#17daa9', {
        dark: BrightnessDirection.Dark,
        light: BrightnessDirection.Light,
      }),
    ).toBe(BrightnessDirection.Light);
    expect(
      ColorHelpers.getHighContrastContentOnBackgroundColor('17daa9', {
        dark: BrightnessDirection.Dark,
        light: BrightnessDirection.Light,
      }),
    ).toBe(BrightnessDirection.Light);
    expect(
      ColorHelpers.getHighContrastContentOnBackgroundColor('#ffefc', {
        dark: BrightnessDirection.Dark,
        light: BrightnessDirection.Light,
      }),
    ).toBe(BrightnessDirection.Dark);
  });

  test('Test getHighContrastContentOnBackgroundColor for customized type', () => {
    type TLogoUrl = 'positive.svg' | 'negative.svg';

    expect(
      ColorHelpers.getHighContrastContentOnBackgroundColor<TLogoUrl>(
        '#000000',
        {
          dark: 'positive.svg',
          light: 'negative.svg',
        },
      ),
    ).toBe<TLogoUrl>('negative.svg');
  });

  test('Test normalizeHexColor', () => {
    const colorMapping: Record<string, string> = {
      f1f1f1f: 'f1f1f1',
      f1f1f1: 'f1f1f1',
      f1f1f: 'f1f1f0',
      f1f: 'ff11ff',
      f1: 'ff1100',
      f: 'ff0000',
      '': '000000',
    };

    Object.entries(colorMapping).forEach(([originalColor, normalizedColor]) => {
      expect(ColorHelpers.normalizeHexColor(originalColor)).toBe(
        normalizedColor,
      );
    });
  });
});
