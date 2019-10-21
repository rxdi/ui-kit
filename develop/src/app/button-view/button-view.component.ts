import { Component, LitElement, html, css } from '@rxdi/lit-html';

/**
 * @customElement button-view-component
 */
@Component({
  selector: 'button-view-component',
  style: css`
    .container {
      background-color: white;
      text-align: center;
      padding: 50px;
      user-select: none;
    }
  `,
  template(this: ButtonViewComponent) {
    return html`
      <div class="container">
        <rx-button>Default</rx-button>
        <rx-button palette="primary">Primary</rx-button>
        <rx-button palette="secondary">Secondary</rx-button>
        <rx-button palette="danger">Danger</rx-button>
        <rx-button palette="warning">Warning</rx-button>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/button/README.md"
      ></markdown-reader>
    `;
  }
})
export class ButtonViewComponent extends LitElement {}
