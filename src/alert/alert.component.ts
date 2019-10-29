import {
  Component,
  html,
  LitElement,
  css,
  svg,
  property,
  unsafeCSS,
  CSSResult
} from '@rxdi/lit-html';

/**
 * @customElement rx-alert
 */
@Component({
  selector: 'rx-alert',
  style: css`
    :host {
      position: relative;
      padding: 15px 29px 15px 15px;
    }

    slot {
      font-size: 15px;
      font-weight: normal;
      line-height: 1.5;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }

    a {
      position: absolute;
      top: 15px;
      right: 15px;
      color: inherit;
      opacity: 0.4;
    }
    a:hover {
      cursor: pointer;
      color: inherit;
      opacity: 0.8;
    }
  `,
  template(this: AlertComponent) {
    return html`
      <style>
        ${this.paletteStyle}
      </style>
      <a @click=${async () => this.onClose()}>
        ${svg`
              <svg width="14" height="14" viewBox="0 0 14 14">
                <line fill="none" stroke="#666" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                <line fill="none" stroke="#666" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
              </svg>
            `}</a
      >
      <slot></slot>
    `;
  }
})
export class AlertComponent extends LitElement {
  @property({ type: String })
  public palette: 'primary' | 'success' | 'warning' | 'danger' | 'default';

  @property({ type: Object })
  public paletteStyle: CSSResult;

  @property({ type: Boolean })
  public transition: boolean;

  onClose() {
    this.dispatchEvent(new CustomEvent('onClose', { detail: this }));
    this.remove();
  }
  OnUpdateFirst() {
    if (this.palette === 'primary') {
      this.setPaletteStyle('#d8eafc', '#1e87f0');
    } else if (this.palette === 'success') {
      this.setPaletteStyle('#edfbf6', '#32d296');
    } else if (this.palette === 'warning') {
      this.setPaletteStyle('#fff6ee', '#faa05a');
    } else if (this.palette === 'danger') {
      this.setPaletteStyle('#fef4f6', '#f0506e');
    } else if (this.palette === 'default') {
      this.setPaletteStyle('#f8f8f8', '#666');
    }
  }

  private setPaletteStyle(backgroundColor: string, color: string) {
    this.paletteStyle = css`
      :host {
        background: ${unsafeCSS(backgroundColor)};
        color: ${unsafeCSS(color)};
      }
    `;
  }
}
