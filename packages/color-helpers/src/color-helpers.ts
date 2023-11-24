/// Color processing related helpers

// Compiler will ignore const enum even we export it
// https://ncjamieson.com/dont-export-const-enums/
export enum BrightnessDirection {
  Light = 1,
  Dark,
}

// A generic type representing a pair of foreground content candidates -- one for dark backgrounds and another one for light ones.
type ForegroundContentCandidates<T> = {
  dark: T;
  light: T;
};

// The YIQ contrast threshold at which we will switch from "dark" to "light" foreground content.
// If the YIQ contrast of the background color is less than this number, the "light" foreground content will be used.
// If the YIQ contrast of the background is greater or equal to this number, the "dark" foreground content will be used.
export const yiqContrastedThreshold = 180;

export class ColorHelpers {
  /**
   * Computes and returns the optimal foreground content for a given background color,
   * ensuring there is high contrast between them.
   * This function uses the YIQ formula to determine the brightness of the background color
   * and then chooses the best contrast option (i.e., the value that will stand out most clearly on this background)
   * from the provided content candidates.
   *
   * @template FOREGROUND_CONTENT_T - The type of the foreground content.
   *
   * @param {string} backgroundColor - The color code of the background, on top of which the content will appear.
   * @param {ForegroundContentCandidates<FOREGROUND_CONTENT_T>} contentCandidates - The two potential candidates for foreground content. One optimized for light backgrounds, another one for dark backgrounds.
   *
   * @returns {FOREGROUND_CONTENT_T} - If the background is dark (closer to black), returns the "light" foreground content. If the background is light (closer to white), returns the "dark" foreground content.
   */
  public static getHighContrastContentOnBackgroundColor<FOREGROUND_CONTENT_T>(
    backgroundColor: string,
    contentCandidates: ForegroundContentCandidates<FOREGROUND_CONTENT_T>,
  ): FOREGROUND_CONTENT_T {
    // Determine whether the given hex color code is closer to black (dark) or white (light)
    const backgroundBrightnessDirection =
      ColorHelpers.getColorBrightnessDirectionByHexColor(backgroundColor);

    // If the background is dark (closer to black), we return the "light" foreground content.
    // If the background is light (closer to white), we return the "dark" foreground content.
    if (backgroundBrightnessDirection === BrightnessDirection.Dark) {
      return contentCandidates.light;
    } else {
      return contentCandidates.dark;
    }
  }

  /**
   * Determines the brightness direction (i.e., light or dark) of a given hex color.
   *
   * This function uses the YIQ formula to calculate the color's "brightness score".
   * Then, it compares this score to the predefined YIQ contrast threshold to determine whether
   * the color is closer to white (light) or black (dark).
   *
   * @param {string} hexColor - The hexadecimal color code to evaluate.
   *
   * @returns {BrightnessDirection} - The brightness direction of the color - either "light" or "dark".
   */
  public static getColorBrightnessDirectionByHexColor(hexColor: string) {
    const normalizedHexColor = ColorHelpers.normalizeHexColor(hexColor);
    const yiqScore =
      ColorHelpers.getYiqContrastScoreByHexColor(normalizedHexColor);
    return yiqScore >= yiqContrastedThreshold
      ? BrightnessDirection.Light
      : BrightnessDirection.Dark;
  }

  /**
   * Calculates the YIQ contrast score of a given hex color.
   *
   * The YIQ score is a measure of the color's brightness, calculated from its RGB components.
   * Lower scores indicate darker colors, while higher scores indicate lighter colors.
   *
   * @param {string} hexColor - The hexadecimal color code to convert to a YIQ contrast score.
   *
   * @returns {number} - The YIQ contrast score of the color.
   */
  public static getYiqContrastScoreByHexColor(hexColor: string) {
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
  }

  /**
   * Get a normalized hex color from any hex color string
   *
   * f1f1f1f -> f1f1f1
   * f1f1f1  -> f1f1f1
   * f1f1f   -> f1f1f0
   * f1f     -> ff11ff
   * f1      -> ff1100
   * f       -> ff0000
   * ''      -> 000000
   * #ffffff -> ffffff
   *
   * @param color original color
   * @returns normalized hexadecimal color with format RRGGBB
   */
  public static normalizeHexColor(color: string): string {
    if (color[0] === '#') {
      color = color.substr(1);
    }

    if (color.length > 6) {
      return color.substring(0, 6);
    }
    if (color.length === 6) {
      return color;
    }
    if (color.length > 3) {
      return color.padEnd(6, '0');
    }
    if (color.length > 0) {
      return color
        .split('')
        .map((c) => `${c}${c}`)
        .join('')
        .padEnd(6, '0');
    }
    return '000000';
  }
}
