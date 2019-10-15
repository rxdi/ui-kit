import {
  Component,
  html,
  css,
  styleMap,
  LitElement,
  property,
  classMap,
  async
} from '@rxdi/lit-html';
import { PalettesUnion } from '@rxdi/ui-kit/settings';
import { Inject } from '@rxdi/core';
import { DynamicCssService } from '@rxdi/ui-kit/services/dynamic-css/dynamic-css';

/**
 * @customElement rx-badge
 */
@Component({
  selector: 'rx-badge',
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
      <style>
        ${async(this.getAsyncStyles)}
      </style>
      <span
        style=${styleMap(
          this.palette ? {} : { color: this.color, background: this.background }
        )}
        class=${classMap({
          badge: true,
          ...(this.palette ? { [this.palette]: true } : {})
        })}
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

  @Inject(DynamicCssService)
  private dynamicCss: DynamicCssService;

  private getAsyncStyles = this.dynamicCss.getStyles();
}
