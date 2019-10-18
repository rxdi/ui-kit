import { Component, LitElement, html, css } from '@rxdi/lit-html';

@Component({
  selector: 'button-view-component',
  style: css`
    .container {
      background-color: white;
      text-align: center;
      padding: 50px;
    }
  `,
  template(this: ButtonViewComponent) {
    return html`
      <div class="container">
        <rx-button>Default</rx-button>
        <rx-button palette="primary">Primary</rx-button>
        <rx-button palette="secondary">Secondary</rx-button>
        <rx-button palette="danger">Danger</rx-button>
      </div>
    `;
  }
})
export class ButtonViewComponent extends LitElement {}
