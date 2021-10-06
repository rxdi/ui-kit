import { css, unsafeCSS } from '@rxdi/lit-html';
import { PlusSVG } from '../../images/plus.svg';
import { MinusSVG } from '../../images/minus.svg';

export const IMAGES = css`
  .plus {
    width: 30px;
    height: 30px;
    background-image: url('data:image/svg+xml;utf8,${unsafeCSS(PlusSVG)}');
    background-repeat: no-repeat;
  }
  .minus {
    width: 30px;
    height: 30px;
    background-image: url('data:image/svg+xml;utf8,${unsafeCSS(MinusSVG)}');
    background-repeat: no-repeat;
  }
`;
