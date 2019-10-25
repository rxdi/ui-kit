import { css } from '@rxdi/lit-html';

export const InputStyle = css`

  .rx-input,
  .rx-select,
  .rx-textarea {
    max-width: 100%;
    width: 100%;
    padding: 0 10px;
    box-sizing : border-box;
    background: #fff;
    color: #666;
    border: 1px solid #e5e5e5;
    transition: 0.2s ease-in-out;
    transition-property: color, background-color, border;
  }
  .rx-radio,
  .rx-checkbox {
    display: inline-block;
    height: 16px;
    width: 16px;
    overflow: hidden;
    margin-top: -4px;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: 1px solid #ccc;
    transition: 0.2s ease-in-out;
    transition-property: background-color, border;
    cursor: pointer;
  }
  .rx-checkbox:checked {
    background-color: #1e87f0;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A")
  }
  .rx-radio {
    border-radius: 50%;
  }
  .rx-radio:checked {
    background-color: #1e87f0;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E")
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
  .rx-danger {
    color: #a94442;
    border-color: #a94442;
  }
  .rx-success {
    color: #32d296;
    border-color: #32d296;
  }
  .rx-outline:focus {
    outline: none;
    /* outline-color: blue; */
  }
  .rx-disabled {
    background-color: #f8f8f8;
    color: #999;
    border-color: #e5e5e5;
  }

`;
