import { css } from '@rxdi/lit-html';

export const style = css`
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  background: #a6463e;
}

.button:active {
  background-color: #c0998d;
  background-size: 100%;
  transition: background 0s;
}

.button:focus {
  outline: 0 !important;
}
`;
