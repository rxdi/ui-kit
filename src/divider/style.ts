import { css } from '@rxdi/lit-html';

export const style = css`
  .icon {
    margin-bottom: 0;
    position: relative;
    height: 20px;
    background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A);
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  hr {
    border: 0;
  }
  .default {
    overflow: visible;
    text-align: inherit;
    margin: 20px 0 20px 0;
    border: 0;
    border-top: 1px solid #e5e5e5;
  }
  .icon::before {
    right: calc(50% + (50px / 2));
    width: 100%;
    content: '';
    position: absolute;
    top: 50%;
    max-width: calc(50% - (50px / 2));
    border-bottom: 1px solid #e5e5e5;
  }
  .icon::after {
    left: calc(50% + (50px / 2));
    width: 100%;
    content: '';
    position: absolute;
    top: 50%;
    max-width: calc(50% - (50px / 2));
    border-bottom: 1px solid #e5e5e5;
  }
`;
