import { Component, LitElement, html } from '@rxdi/lit-html';

@Component({
  selector: 'button-view-component',
  template(this: ButtonViewComponent) {
    return html`
        <rx-button>Default</rx-button>
        <rx-button palette="primary">Primary</rx-button>
        <rx-button palette="secondary">Secondary</rx-button>
    `;
  }
})
export class ButtonViewComponent extends LitElement {}
