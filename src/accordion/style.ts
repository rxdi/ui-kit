import { css } from '@rxdi/lit-html';
import { MAIN_CSS } from '../styles';
import { TRANSITIONS } from '../styles/transitions';

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
  .content {
    color: #666;
    font-size: 15px;
  }
`;
