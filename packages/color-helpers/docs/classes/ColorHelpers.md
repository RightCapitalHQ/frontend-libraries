[**@rightcapital/color-helpers**](../README.md)

***

[@rightcapital/color-helpers](../modules.md) / ColorHelpers

# Class: ColorHelpers

Defined in: [color-helpers.ts:21](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/color-helpers/src/color-helpers.ts#L21)

## Constructors

### Constructor

> **new ColorHelpers**(): `ColorHelpers`

#### Returns

`ColorHelpers`

## Methods

### getColorBrightnessDirectionByHexColor()

> `static` **getColorBrightnessDirectionByHexColor**(`hexColor`): [`BrightnessDirection`](../enumerations/BrightnessDirection.md)

Defined in: [color-helpers.ts:63](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/color-helpers/src/color-helpers.ts#L63)

Determines the brightness direction (i.e., light or dark) of a given hex color.

This function uses the YIQ formula to calculate the color's "brightness score".
Then, it compares this score to the predefined YIQ contrast threshold to determine whether
the color is closer to white (light) or black (dark).

#### Parameters

##### hexColor

`string`

The hexadecimal color code to evaluate.

#### Returns

[`BrightnessDirection`](../enumerations/BrightnessDirection.md)

- The brightness direction of the color - either "light" or "dark".

***

### getHighContrastContentOnBackgroundColor()

> `static` **getHighContrastContentOnBackgroundColor**\<`FOREGROUND_CONTENT_T`\>(`backgroundColor`, `contentCandidates`): `FOREGROUND_CONTENT_T`

Defined in: [color-helpers.ts:36](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/color-helpers/src/color-helpers.ts#L36)

Computes and returns the optimal foreground content for a given background color,
ensuring there is high contrast between them.
This function uses the YIQ formula to determine the brightness of the background color
and then chooses the best contrast option (i.e., the value that will stand out most clearly on this background)
from the provided content candidates.

#### Type Parameters

##### FOREGROUND_CONTENT_T

`FOREGROUND_CONTENT_T`

The type of the foreground content.

#### Parameters

##### backgroundColor

`string`

The color code of the background, on top of which the content will appear.

##### contentCandidates

`ForegroundContentCandidates`\<`FOREGROUND_CONTENT_T`\>

The two potential candidates for foreground content. One optimized for light backgrounds, another one for dark backgrounds.

#### Returns

`FOREGROUND_CONTENT_T`

- If the background is dark (closer to black), returns the "light" foreground content. If the background is light (closer to white), returns the "dark" foreground content.

***

### getYiqContrastScoreByHexColor()

> `static` **getYiqContrastScoreByHexColor**(`hexColor`): `number`

Defined in: [color-helpers.ts:82](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/color-helpers/src/color-helpers.ts#L82)

Calculates the YIQ contrast score of a given hex color.

The YIQ score is a measure of the color's brightness, calculated from its RGB components.
Lower scores indicate darker colors, while higher scores indicate lighter colors.

#### Parameters

##### hexColor

`string`

The hexadecimal color code to convert to a YIQ contrast score.

#### Returns

`number`

- The YIQ contrast score of the color.

***

### normalizeHexColor()

> `static` **normalizeHexColor**(`color`): `string`

Defined in: [color-helpers.ts:104](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/color-helpers/src/color-helpers.ts#L104)

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

##### color

`string`

original color

#### Returns

`string`

normalized hexadecimal color with format RRGGBB
