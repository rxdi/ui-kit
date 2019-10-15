import { CSSResult } from '@rxdi/lit-html';
import { strEnum } from '@rxdi/ui-kit/helpers/str-enum';

export const PalettesUnion = strEnum(['default', 'primary', 'secondary']);
export type PalettesUnion = keyof typeof PalettesUnion;
export type Palettes = {[key in PalettesUnion]: CSSResult};
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
