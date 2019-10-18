import { Component, html, LitElement, css } from '@rxdi/lit-html';

@Component({
  selector: 'label-view-component',
  style: css`
    .container {
      background-color: white;
      height: 100px;
      padding: 50px;
      user-select: none;
    }
    rx-label {
      margin-right: 10px;
    }
  `,
  template(this: LabelViewComponent) {
    return html`
      <div class="container">
      <rx-label>Default</rx-label>
      <rx-label palette="primary">Primary</rx-label>
      <rx-label palette="secondary">Secondary</rx-label>
      <rx-label palette="warning">Warning</rx-label>
      <rx-label palette="danger">Danger</rx-label>
      </div>
    `;
  }
})
export class LabelViewComponent extends LitElement {}
