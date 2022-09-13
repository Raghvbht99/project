import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#5ccc15',
  lightPrimary: '#93ff53',
  secondary: '#EE246D',
  dark: '#3C3C3C',

  lightGray: '#F6F6F6',
  lightGray2: '#ebebeb',
  veryLightGray: '#f7f7f7',
  gray: '#C1C3C5',
  grayText: '#6C6C6C',
  darkgray: '#5F6368',

  black: '#1E1F20',
  white: '#FFFFFF',
  red: '#F24924',
  green: '#4AEE5B',

  transparent: 'transparent',
  transparentBlack: '#00000090',
  transparentBlackFont: '#00000099',
  transparentBlack30: '#00000030',
};

export const SIZES = {
  normalFontSize: 16,
  titleFontSize: 18,
  padding: 5,
  screenPadding: 20,
  buttonImage: 20,
  ///////////////////////////////////
  // global sizes
  base: 8,
  font: 14,
  radius: 15, // 30 for more rounded corners
  // padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // for animated loading screen
  INPUT_RANGE_START: 0,
  INPUT_RANGE_END: 1,
  OUTPUT_RANGE_START: -281,
  OUTPUT_RANGE_END: 0,
  ANIMATION_TO_VALUE: 1,
  ANIMATION_DURATION: 25000,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  //export your fonts here
};
export const GRADIENTS = {
  primary: ['#FF0080', '#7928CA'],
  secondary: ['#A8B8D8', '#627594'],
  info: ['#21D4FD', '#2152FF'],
  success: ['#98EC2D', '#17AD37'],
  warning: ['#FBCF33', '#F53939'],
  danger: ['#FF667C', '#EA0606'],
  drawer: ['#FF0080', '#7928CA'],

  light: ['#EBEFF4', '#CED4DA'],
  dark: ['#3A416F', '#141727'],

  white: [String(COLORS.white), '#EBEFF4'],
  black: [String(COLORS.black), '#141727'],

  divider: ['rgba(255,255,255,0.3)', 'rgba(102, 116, 142, 0.6)'],
  menu: [
    'rgba(255, 255, 255, 0.2)',
    'rgba(112, 125, 149, 0.5)',
    'rgba(255, 255, 255, 0.2)',
  ],
  custom1: ['#0093E9', '#80D0C7'],
  custom2: ['#00DBDE', '#FC00FF'],
  custom3: ['#FBAB7E', '#F7CE68'],
  custom4: ['#85FFBD', '#FFFB7D'],
  custom5: ['#FFDEE9', '#B5FFFC'],
  custom6: ['#3EECAC', '#EE74E1'],
  custom7: ['#FF3CAC', '#784BA0', '#2B86C5'],
  custom8: ['#8E2DE2', '#4A00E0'],
};

const appTheme = {COLORS, SIZES, FONTS,GRADIENTS};

export default appTheme;
