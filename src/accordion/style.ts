import { css, unsafeCSS } from '@rxdi/lit-html';
import { MAIN_CSS } from '../styles';
import { TRANSITIONS } from '../styles/transitions';

// import plus from '../images/plus.svg';

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
    min-width: 200px;
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
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .title.collapsed::before {
  }
  .content {
    color: #666;
    font-size: 15px;
  }
`;
