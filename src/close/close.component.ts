import { Component, html, LitElement, svg, property } from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

/**
 * @customElement rx-close
 */
@Component({
  selector: 'rx-close',
  template(this: CloseComponent) {
    return html`
      <style>
        svg line {
          stroke-width: ${this.strokeWidth};
        }
        svg:hover {
          stroke: blue;
        }
      </style>
      ${this.palette
        ? html`
            <style>
              svg line {
                stroke: var(--${this.palette}-bg-color);
              }
            </style>
          `
        : html`
            <style>
              svg line {
                stroke: ${this.stroke};
              }
            </style>
          `}
      ${svg`<svg
        width=${this.width}
        height=${this.height}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="close-large">
          <line x1="1" y1="1" x2="19" y2="19"></line>
          <line x1="19" y1="1" x2="1" y2="19"></line>
      </svg>`}
    `;
  }
})
export class CloseComponent extends LitElement {
  @property({ type: String })
  public palette: PalettesUnion;

  @property() public stroke = '#FFF';
  @property() public strokeWidth = '1.4';
  @property() public width = '20';
  @property() public height = '20';
}
