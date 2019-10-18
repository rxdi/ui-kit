import { Component, html, LitElement, property } from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

/**
 * @customElement rx-label
 */
@Component({
  selector: 'rx-label',
  template(this: LabelComponent) {
    return html`
      <style>
        :host {
          color: var(--${this.palette}-color);
          background: var(--${this.palette}-bg-color);
          border: var(--${this.palette}-border);
          display: inline-block;
          padding: 0 10px;
          line-height: 1.5;
          font-size: 12px;
          vertical-align: middle;
          white-space: nowrap;
          border-radius: 2px;
          text-transform: uppercase;
        }
      </style>
      <slot></slot>
    `;
  }
})
export class LabelComponent extends LitElement {
  @property() palette: PalettesUnion = 'default';
}
