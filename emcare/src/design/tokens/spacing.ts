const IOS_BASE = 4;

export const spacing = {
  scale: {
    xxs: IOS_BASE * 0.5,
    xs: IOS_BASE,
    sm: IOS_BASE * 2,
    md: IOS_BASE * 3,
    lg: IOS_BASE * 4,
    xl: IOS_BASE * 5,
    '2xl': IOS_BASE * 6,
    '3xl': IOS_BASE * 8,
    '4xl': IOS_BASE * 10,
    '5xl': IOS_BASE * 12,
    '6xl': IOS_BASE * 16,
  },
  layout: {
    screenPadding: IOS_BASE * 5,
    cardPadding: IOS_BASE * 4,
    sectionSpacing: IOS_BASE * 6,
    listGap: IOS_BASE * 3,
  },
  control: {
    minHeight: IOS_BASE * 11,
    radiusPadding: IOS_BASE * 2,
  },
} as const;

export type SpacingToken = typeof spacing;
