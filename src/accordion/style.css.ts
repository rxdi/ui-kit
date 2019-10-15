import { css } from '@rxdi/lit-html';
import { MAIN_CSS } from '../styles';
import { TRANSITIONS } from '../styles/transitions.css';

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
    background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%20%2F%3E%0A%3C%2Fsvg%3E);
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .title.collapsed::before {
    background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%3C%2Fsvg%3E);
  }
  .content {
    color: #666;
    font-size: 15px;
  }
`;
