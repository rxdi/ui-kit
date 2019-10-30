import {
  Component,
  LitElement,
  html,
  svg,
  css,
  property,
  unsafeCSS
} from '@rxdi/lit-html';
import { Spinner } from './spinner.svg';

/**
 * @customElement rx-spinner
 */
@Component({
  selector: 'rx-spinner',
  style: css`
    svg {
      vertical-align: middle;
    }

    .uk-spinner > * > * {
      stroke-dasharray: 88px;
      stroke-dashoffset: 0;
      transform-origin: center;

      stroke: #666;
      stroke-linecap: round;
    }

    @keyframes uk-spinner-rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(270deg);
      }
    }

    .uk-spinner > * > * {
      stroke-dasharray: 88px;
      stroke-dashoffset: 0;
      transform-origin: center;
      stroke-linecap: round;
    }

    @keyframes uk-spinner-dash {
      0% {
        stroke-dashoffset: 88px;
      }

      50% {
        stroke-dashoffset: 22px;
        transform: rotate(135deg);
      }

      100% {
        stroke-dashoffset: 88px;
        transform: rotate(450deg);
      }
    }
  `,
  template(this: SpinnerComponent) {
    return html`
      <style>
        .uk-spinner > * {
          animation: uk-spinner-rotate ${unsafeCSS(this.speed)}s linear infinite;
        }

        .uk-spinner > * > * {
          stroke-width: ${unsafeCSS(this.stroke)};
          animation: uk-spinner-dash ${unsafeCSS(this.speed)}s ease-in-out
            infinite;
        }
      </style>
      <div uk-spinner="" class="uk-icon uk-spinner">
        ${Spinner(this.width, this.height)}
      </div>
    `;
  }
})
export class SpinnerComponent extends LitElement {
  @property({ type: Number })
  public speed = 2.4;

  @property({ type: Number })
  public width = 30;

  @property({ type: Number })
  public height = 30;

  @property({ type: Number })
  public stroke = 1;
}
