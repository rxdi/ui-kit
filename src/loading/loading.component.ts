import { Component, css, html, LitElement, property, unsafeCSS } from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

type IFCondition = () => boolean;

/**
 * @customElement rx-loading
 */
@Component({
  selector: 'rx-loading',
  style: css`
    .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
    }
    .lds-ellipsis div {
      position: absolute;
      top: 27px;
      width: 11px;
      height: 11px;
      border-radius: 50%;

      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds-ellipsis div:nth-child(1) {
      left: 6px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(2) {
      left: 6px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(3) {
      left: 26px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(4) {
      left: 45px;
      animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(19px, 0);
      }
    }
  `,
  template(this: LoadingComponent) {
    return html`
      <style>
        .lds-ellipsis div {
          background: ${unsafeCSS(this.palette ? `var(--${this.palette}-bg-color)` : this.color)};
        }
      </style>
      ${this.if()
        ? html`
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          `
        : ''}
    `;
  }
})
export class LoadingComponent extends LitElement {

  @property({ type: String })
  public palette: PalettesUnion;

  @property({ type: String })
  color = '#fff';
  @property({ attribute: false })
  if: IFCondition = () => true
}
