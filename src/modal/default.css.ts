import { css } from '@rxdi/lit-html';

export const defaultModalStyle = css`
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }

  .backdrop {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: all;
    z-index: 10;
  }

  .content {
    z-index: 20;
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: all;
  }
`;
