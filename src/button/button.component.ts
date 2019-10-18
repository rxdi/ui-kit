import { Component, html, LitElement, property } from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

/**
 * @customElement rx-button
 */
@Component({
  selector: 'rx-button',
  template(this: ButtonComponent) {
    return html`
      <style>
        :host {
          margin: 0;
          border: none;
          overflow: visible;
          font: inherit;
          color: var(--${this.palette}-color);
          background: var(--${this.palette}-bg-color);
          color: #222;
          border: 1px solid #e5e5e5;
          cursor: pointer;
          color: inherit;
          text-transform: none;
          -webkit-appearance: none;
          border-radius: 0;
          display: inline-block;
          box-sizing: border-box;
          padding: 0 30px;
          vertical-align: middle;
          font-size: 14px;
          line-height: 38px;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          transition: 0.1s ease-in-out;
          transition-property: color, background-color, border-color;
        }
        slot {
          user-select: none;
        }
      </style>
      <slot></slot>
    `;
  }
})
export class ButtonComponent extends LitElement {
  @property({ type: String })
  public palette: PalettesUnion;
}
