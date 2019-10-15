import {
  Component,
  html,
  css,
  styleMap,
  LitElement,
  property
} from '@rxdi/lit-html';

/**
 * @customElement rx-badge
 */
@Component({
  selector: 'rx-badge',
  useShadow: true,
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
        style=${styleMap({ color: this.color, background: this.background })}
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
}
