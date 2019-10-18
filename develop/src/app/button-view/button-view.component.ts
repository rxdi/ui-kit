import { Component, LitElement, html } from '@rxdi/lit-html';

@Component({
  selector: 'button-view-component',
  template(this: ButtonViewComponent) {
    return html`
      <div style="background-color: white; text-align: center; padding: 50px;">
        <rx-button>Default</rx-button>
        <rx-button palette="primary">Primary</rx-button>
        <rx-button palette="secondary">Secondary</rx-button>
        <rx-button palette="danger">Danger</rx-button>
      </div>
    `;
  }
})
export class ButtonViewComponent extends LitElement {}
