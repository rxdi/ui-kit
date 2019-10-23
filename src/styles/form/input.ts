import { css } from '@rxdi/lit-html';

export const InputStyle = css`
  .rx-input,
  .rx-select,
  .rx-textarea {
    max-width: 100%;
    width: 100%;
    padding: 0 10px;
    background: #fff;
    color: #666;
    border: 1px solid #e5e5e5;
    transition: 0.2s ease-in-out;
    transition-property: color, background-color, border;
  }
  .rx-radio, .rx-checkbox {
    display: inline-block;
    height: 16px;
    width: 16px;
    overflow: hidden;
    margin-top: -4px;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: 1px solid #ccc;
    transition: .2s ease-in-out;
    transition-property: background-color,border;
    cursor: pointer;
  }
  .rx-radio {
    border-radius: 50%;
  }
  .rx-select {
    height: 40px;
    vertical-align: middle;
    display: inline-block;
  }
  .rx-input {
    height: 40px;
    vertical-align: middle;
    display: inline-block;
  }
  .rx-textarea {
    padding-top: 4px;
    padding-bottom: 4px;
    padding: 15px;
    vertical-align: top;
  }
`;
