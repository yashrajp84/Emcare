import { Platform } from 'react-native';

export const fontFamilies = {
  display: Platform.select({
    ios: 'SF Pro Display',
    android: 'Roboto',
    default: 'System',
  }),
  text: Platform.select({
    ios: 'SF Pro Text',
    android: 'Roboto',
    default: 'System',
  }),
} as const;

export const fontSizes = {
  caption: 12,
  body: 16,
  bodyLarge: 18,
  title: 20,
  headline: 24,
  display: 32,
} as const;

export const lineHeights = {
  caption: 16,
  body: 22,
  bodyLarge: 24,
  title: 26,
  headline: 30,
  display: 38,
} as const;

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const letterSpacing = {
  normal: 0,
  wide: 0.5,
} as const;

export const typography = {
  caption: {
    fontFamily: fontFamilies.text,
    fontSize: fontSizes.caption,
    lineHeight: lineHeights.caption,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.normal,
  },
  body: {
    fontFamily: fontFamilies.text,
    fontSize: fontSizes.body,
    lineHeight: lineHeights.body,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.normal,
  },
  bodyLarge: {
    fontFamily: fontFamilies.text,
    fontSize: fontSizes.bodyLarge,
    lineHeight: lineHeights.bodyLarge,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.normal,
  },
  title: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.title,
    lineHeight: lineHeights.title,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },
  headline: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.headline,
    lineHeight: lineHeights.headline,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },
  display: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.display,
    lineHeight: lineHeights.display,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.wide,
  },
} as const;

export type TypographyToken = typeof typography;
