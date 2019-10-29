import { Component, html, LitElement, css, property } from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

/**
 * @customElement rx-card
 */
@Component({
  selector: 'rx-card',
  style: css`
    .card {
      border-radius: 8px;
      margin: 0px;
    }

    .card-1 {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.14);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .card-1:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08),
        0 10px 10px rgba(0, 0, 0, 0.08);
    }

    .black {
      box-shadow: 0 14px 28px rgba(233, 233, 233, 0.2),
        0 10px 10px rgba(232, 232, 232, 0.18);
    }

    .card-2 {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .card-3 {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .card-4 {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .card-5 {
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
    }
  `,
  template(this: CardComponent) {
    return html`
      <style>
        .card {
          color: var(--${this.palette}-color);
          background-color:  var(--${this.palette}-bg-color);;
        }
      </style>
      <div part="card" class="card card-${this.shadow}${this.invert ? ' black' : ''}">
        <slot></slot>
      </div>
    `;
  }
})
export class CardComponent extends LitElement {
  @property({ type: String }) shadow: '1' | '2' | '3' | '4' | '5' = '1';
  @property({ type: Boolean }) invert: boolean;
  @property({ type: String }) palette: PalettesUnion = 'default';
}
