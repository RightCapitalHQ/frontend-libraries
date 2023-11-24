[@rightcapital/color-helpers](../README.md) / [Exports](../modules.md) / ColorHelpers

# Class: ColorHelpers

## Table of contents

### Constructors

- [constructor](ColorHelpers.md#constructor)

### Methods

- [getColorBrightnessDirectionByHexColor](ColorHelpers.md#getcolorbrightnessdirectionbyhexcolor)
- [getHighContrastContentOnBackgroundColor](ColorHelpers.md#gethighcontrastcontentonbackgroundcolor)
- [getYiqContrastScoreByHexColor](ColorHelpers.md#getyiqcontrastscorebyhexcolor)
- [normalizeHexColor](ColorHelpers.md#normalizehexcolor)

## Constructors

### constructor

• **new ColorHelpers**(): [`ColorHelpers`](ColorHelpers.md)

#### Returns

[`ColorHelpers`](ColorHelpers.md)

## Methods

### getColorBrightnessDirectionByHexColor

▸ **getColorBrightnessDirectionByHexColor**(`hexColor`): `BrightnessDirection`

Determines the brightness direction (i.e., light or dark) of a given hex color.

This function uses the YIQ formula to calculate the color's "brightness score".
Then, it compares this score to the predefined YIQ contrast threshold to determine whether
the color is closer to white (light) or black (dark).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hexColor` | `string` | The hexadecimal color code to evaluate. |

#### Returns

`BrightnessDirection`

- The brightness direction of the color - either "light" or "dark".

#### Defined in

[color-helpers.ts:64](https://github.com/RightCapitalHQ/frontend-libraries/blob/a3dbc90/packages/color-helpers/src/color-helpers.ts#L64)

___

### getHighContrastContentOnBackgroundColor

▸ **getHighContrastContentOnBackgroundColor**\<`FOREGROUND_CONTENT_T`\>(`backgroundColor`, `contentCandidates`): `FOREGROUND_CONTENT_T`

Computes and returns the optimal foreground content for a given background color,
ensuring there is high contrast between them.
This function uses the YIQ formula to determine the brightness of the background color
and then chooses the best contrast option (i.e., the value that will stand out most clearly on this background)
from the provided content candidates.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `FOREGROUND_CONTENT_T` | The type of the foreground content. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `backgroundColor` | `string` | The color code of the background, on top of which the content will appear. |
| `contentCandidates` | `ForegroundContentCandidates`\<`FOREGROUND_CONTENT_T`\> | The two potential candidates for foreground content. One optimized for light backgrounds, another one for dark backgrounds. |

#### Returns

`FOREGROUND_CONTENT_T`

- If the background is dark (closer to black), returns the "light" foreground content. If the background is light (closer to white), returns the "dark" foreground content.

#### Defined in

[color-helpers.ts:36](https://github.com/RightCapitalHQ/frontend-libraries/blob/a3dbc90/packages/color-helpers/src/color-helpers.ts#L36)

___

### getYiqContrastScoreByHexColor

▸ **getYiqContrastScoreByHexColor**(`hexColor`): `number`

Calculates the YIQ contrast score of a given hex color.

The YIQ score is a measure of the color's brightness, calculated from its RGB components.
Lower scores indicate darker colors, while higher scores indicate lighter colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hexColor` | `string` | The hexadecimal color code to convert to a YIQ contrast score. |

#### Returns

`number`

- The YIQ contrast score of the color.

#### Defined in

[color-helpers.ts:83](https://github.com/RightCapitalHQ/frontend-libraries/blob/a3dbc90/packages/color-helpers/src/color-helpers.ts#L83)

___

### normalizeHexColor

▸ **normalizeHexColor**(`color`): `string`

Get a normalized hex color from any hex color string

f1f1f1f -> f1f1f1
f1f1f1  -> f1f1f1
f1f1f   -> f1f1f0
f1f     -> ff11ff
f1      -> ff1100
f       -> ff0000
''      -> 000000
#ffffff -> ffffff

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | original color |

#### Returns

`string`

normalized hexadecimal color with format RRGGBB

#### Defined in

[color-helpers.ts:105](https://github.com/RightCapitalHQ/frontend-libraries/blob/a3dbc90/packages/color-helpers/src/color-helpers.ts#L105)
