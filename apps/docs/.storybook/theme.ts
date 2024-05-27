import { create } from '@storybook/theming'

const $blue = '#228fff'
const $grayDark = 'rgb(33 33 33)'
const $transparent = 'transparent'
const $white = 'rgb(255 255 255 / 0.9)'
const $white2 = 'rgb(255 255 255 / 0.8)'
const $white3 = 'rgb(240 240 240 / 0.9)'

const $colorPrimary = $blue;
const $colorSecondary = $blue;

const $borderRadius = 2

export const theme = create({
  base: 'light',

  colorPrimary: $colorPrimary,
  colorSecondary: $colorSecondary,

  // UI
  appBg: $white,
  appContentBg: $white2,
  appBorderColor: $transparent,
  appBorderRadius: $borderRadius,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: $grayDark,
  textInverseColor: $white,

  // Toolbar default and active colors
  barTextColor: $white3,
  barSelectedColor: $white,
  barBg: $colorPrimary,

  // Form colors
  inputBg: $white,
  inputBorder: $white2,
  inputTextColor: $grayDark,
  inputBorderRadius: $borderRadius,

  brandTitle: 'Instituto Inventare - Design System',
  brandUrl: '#',
  brandImage:
    'https://raw.githubusercontent.com/inventare/design-system/main/utils/assets/logo_500x125_blue.png',
})
