import { Component, LitElement, html, property } from '@rxdi/lit-html';

/**
 * @customElement rx-if
 */
@Component({
  selector: 'rx-if',
  template(this: IfComponent) {
    return html`
      ${this.exp
        ? html`
            <slot></slot>
          `
        : ''}
    `;
  }
})
export class IfComponent extends LitElement {
  @property() exp: boolean;
}
