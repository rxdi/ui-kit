import {
  Component,
  html,
  styleMap,
  LitElement,
  property
} from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

/**
 * @customElement rx-badge
 */
@Component({
  selector: 'rx-badge',
  template(this: BadgeComponent) {
    return html`
    <style>
    .badge {
      box-sizing: border-box;
      min-width: 22px;
      height: 22px;
      padding: 0 5px;
      border-radius: 500px;
      vertical-align: middle;
      font-size: 14px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: var(--${this.palette}-color);
      background: var(--${this.palette}-bg-color);
    }
    </style>
      <span
        style=${styleMap(
          this.palette ? {} : { color: this.color, background: this.background }
        )}
        class="badge"
        ><slot></slot
      ></span>
    `;
  }
})
export class BadgeComponent extends LitElement {
  @property({ type: String })
  public background = '#1e87f0';

  @property({ type: String })
  public color = '#fff';

  @property({ type: String })
  public palette: PalettesUnion;
}
