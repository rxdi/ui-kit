import { css } from '@rxdi/lit-html';

export const style = css`
  .backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.32);
  }

  .container {
    padding: 50px 50px;
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    transform: translateY(0);
    margin: 0 auto;
    background: #fff;
    width: 600px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    transition: 0.3s linear;
    transition-property: opacity, transform;
    max-width: calc(100% - 0.01px) !important;
    padding: 30px 30px;
    color: #666;
    z-index: 12;
  }

  h1 {
    margin-top: 0;
    font-size: 30px;
    line-height: 1.3;
    margin: 0 0 20px 0;
    font-family: ProximaNova, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
    color: #222;
    text-transform: none;
  }

  button {
    position: absolute;
    z-index: 1010;
    top: 10px;
    right: 10px;
    padding: 5px;
    border: none;
    cursor: pointer;
    text-transform: none;
    outline: none;
    background-color: transparent;
  }
  p {
    font-size: 15px;
    font-weight: normal;
    line-height: 1.5;
  }
`;
