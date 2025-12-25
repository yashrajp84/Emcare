import { blue, purple, red } from './colors';

// Light mode is the only active palette for now; add dark mode later.
export const semanticColors = {
  mode: 'light',
  light: {
    background: {
      primary: blue[0],
    },
    text: {
      primary: blue[9],
    },
    alert: {
      warning: red[2],
    },
    insight: {
      ai: purple[3],
    },
  },
} as const;

export type SemanticColors = typeof semanticColors;
