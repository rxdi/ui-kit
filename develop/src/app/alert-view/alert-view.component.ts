import { LitElement, html, Component, css } from '@rxdi/lit-html';

@Component({
  selector: 'alert-view-component',
  style: css`
    .container {
      width: auto;
      margin: 0 auto;
      padding: 20px;
      display: grid;
    }
    rx-alert {
      margin-top: 10px;
    }
  `,
  template(this: AlertViewComponent) {
    return html`
      <div class="container">
        <rx-alert>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="success">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="warning">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>

        <rx-alert palette="danger">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </rx-alert>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/alert/README.md"
      ></markdown-reader>
    `;
  }
})
export class AlertViewComponent extends LitElement {}
