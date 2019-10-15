import { css } from '@rxdi/lit-html';

import { DEFAULT } from './chunks/palettes/default';
import { FLEX } from './chunks/flex';
import { POINTER } from './chunks/pointer';
import { CENTER } from './chunks/center';
import { SPACER } from './chunks/spacer';
import { PRIMARY } from './chunks/palettes/primary';
import { SECONDARY } from './chunks/palettes/secondary';

export const MAIN_CSS = css`
  ${FLEX}
  ${SPACER}
  ${POINTER}
  ${CENTER}
  ${DEFAULT}
  ${PRIMARY}
  ${SECONDARY}
`;
