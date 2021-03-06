import { css, unsafeCSS } from '@rxdi/lit-html';
import minus from '../images/minus.svg';
import plus from '../images/plus.svg';

export const IMAGES = css`
  .plus {
    width: 30px;
    height: 30px;
    background-image: url(${unsafeCSS(plus)});
    background-repeat: no-repeat;
  }
  .minus {
    width: 30px;
    height: 30px;
    background-image: url(${unsafeCSS(minus)});
    background-repeat: no-repeat;
  }
`;
