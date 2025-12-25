/**
 * RULES:
 * - No raw hex values outside this file
 * - Always reference colors via tokens
 * - Semantic mappings live in a separate file (semanticColors.ts)
 * - Codex must NOT invent new colors
 *
 * Token philosophy:
 * - Numbers represent intensity (0 = lightest, 10 = darkest)
 * - No semantic meaning yet (we will layer that later)
 * - Prevents AI from inventing colors
 */
export const blue = {
  0: '#E4F3FD',
  0.5: '#CFE6F5',
  1: '#BDD9EC',
  1.5: '#AACCEA',
  2: '#8BFBDC',
  3: '#64A4CB',
  4: '#3BAABB',
  5: '#0F70AA',
  6: '#0C5A88',
  7: '#094366',
  8: '#062D44',
  9: '#031622',
  9.5: '#020B11',
  10: '#000000',
} as const;

export const red = {
  0: '#FFFCCF',
  0.5: '#FBE5E5',
  1: '#F1CECE',
  1.5: '#EBBBBB',
  2: '#EA4A41',
  3: '#D67373',
  4: '#C94646',
  5: '#B81818',
  6: '#961313',
  7: '#700E0E',
  8: '#4B0A0A',
  8.5: '#380707',
  9: '#250505',
  9.5: '#130202',
  10: '#000000',
} as const;

export const purple = {
  0: '#E2C3FF',
  0.5: '#D4B0F5',
  1: '#C59CEB',
  1.5: '#B789E1',
  2: '#A875D7',
  3: '#8B4EC2',
  4: '#6E27AE',
  5: '#51009A',
  6: '#41007B',
  7: '#31005C',
  8: '#20003E',
  8.5: '#18002E',
  9: '#10001F',
  10: '#08000F',
} as const;

export const colors = {
  blue,
  red,
  purple,
} as const;

export type ColorToken = typeof colors;
