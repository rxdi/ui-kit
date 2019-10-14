import { css } from '@rxdi/lit-html';

export const style = css`
  .container {
    width: 80%;
    margin: 0 auto;
  }


  input[type='text'],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type='submit'] {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .input-group {
    color: #333;
    float: left;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 20px;
    width: 650px;
  }

  .error-message {
    color: #cc0033;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin: 5px 0 0;
  }

  .input-group .error-message {
    display: none;
  }

  /* Error Styling */

  .error label {
    color: #cc0033;
  }

  .error input[type='text'] {
    background-color: #fce4e4;
    border: 1px solid #cc0033;
    outline: none;
  }

  .error .error-message {
    display: inline-block;
  }

  input[type='submit']:hover {
    background-color: #45a049;
  }

  .input-container {
    width: 650px;
    margin: 50px auto;
  }


`;

