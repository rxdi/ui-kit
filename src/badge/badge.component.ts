import {
  Component,
  html,
  styleMap,
  LitElement,
  property,
} from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

export interface BadgeOptions {
  boarderRadius: number;
  height: number;
  fontSize: number;
  minWidth: number;
  color: string;
  background: string;
}
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
          min-width: ${this.options?.minWidth}px;
          height: ${this.options?.height}px;
          padding: 0 5px;
          border-radius: ${this.options?.boarderRadius}px;
          vertical-align: middle;
          font-size: ${this.options?.fontSize}px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: var(--${this.palette}-color);
          background: var(--${this.palette}-bg-color);
        }
      </style>
      <span
        style=${styleMap(
          this.palette ? {} : { color: this.color || this.options?.color, background: this.background || this.options?.background }
        )}
        class="badge"
        ><slot></slot
      ></span>
    `;
  },
})
export class BadgeComponent extends LitElement {
  @property({ type: String })
  public background: string;

  @property({ type: String })
  public color: string;

  @property({ type: Object })
  public options: Partial<BadgeOptions>;

  @property({ type: String })
  public palette: PalettesUnion;

  OnUpdate() {
    this.options = {
      boarderRadius: 500,
      height: 22,
      fontSize: 14,
      minWidth: 22,
      color: '#FFF',
      background: '#1e87f0',
      ...this.options,
    };
  }
}
