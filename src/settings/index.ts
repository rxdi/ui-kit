import { CSSResult } from '@rxdi/lit-html';
import { strEnum } from '../helpers/str-enum';

export const PalettesUnion = strEnum([
  'root',
  'default',
  'primary',
  'secondary',
  'danger',
  'warning'
]);
export type PalettesUnion = keyof typeof PalettesUnion;
export type Palettes = { [key in PalettesUnion]?: CSSResult };
export const Palettes = 'palettes';

export const Styles = strEnum([
  'spacer',
  'pointer',
  'images',
  'flex',
  'center',
  'transitions'
]);
export type Styles = keyof typeof Styles;
