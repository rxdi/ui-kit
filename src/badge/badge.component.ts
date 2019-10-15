import {
  Component,
  html,
  css,
  styleMap,
  LitElement,
  property,
  classMap
} from '@rxdi/lit-html';
import { MAIN_CSS } from '@rxdi/ui-kit/styles';

/**
 * @customElement rx-badge
 */
@Component({
  selector: 'rx-badge',
  styles: [MAIN_CSS],
  style: css`
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
    }
  `,
  template(this: BadgeComponent) {
    return html`
      <span
        style=${styleMap(this.palette ? {} : { color: this.color, background: this.background })}
        class=${classMap({badge: true, ...this.palette ? {[this.palette]: true}  : {}})}
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
  public palette: 'default' | 'primary' | 'secondary';
}
