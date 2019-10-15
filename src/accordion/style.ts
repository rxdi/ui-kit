import { css, unsafeCSS } from '@rxdi/lit-html';
import { MAIN_CSS } from '@rxdi/ui-kit/styles';
import { TRANSITIONS } from '@rxdi/ui-kit/styles/transitions';

import minus from '@rxdi/ui-kit/images/minus.svg';
import plus from '@rxdi/ui-kit/images/plus.svg';

export const style = css`
  ${MAIN_CSS}
  ${TRANSITIONS}
  .title {
    display: block;
    font-size: 20px;
    line-height: 1.4;
    color: #222;
  }
  .title.userSelect {
    user-select: none;
  }
  .item {
    background: white;
    margin-top: 20px;
  }
  .container {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .title::before {
    content: '';
    width: 1.4em;
    height: 1.4em;
    margin-left: 10px;
    float: right;
    color: black;
    background-image: url(${unsafeCSS(plus)});
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .title.collapsed::before {
    background-image: url(${unsafeCSS(minus)});
  }
  .content {
    color: #666;
    font-size: 15px;
  }
`;
