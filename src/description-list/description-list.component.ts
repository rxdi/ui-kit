import { LitElement, Component, html, css } from '@rxdi/lit-html';

/**
 * @customElement rx-description
 */
@Component({
  selector: 'rx-description',
  style: css`
    .description {
      color: #222;
      font-size: 14px;
      font-weight: normal;
      text-transform: uppercase;
    }

    .text {
      color: #666;
      font-size: 15px;
      font-weight: normal;
      line-height: 1.5;
    }

    .border {
      border-top: 1px solid #e5e5e5;
      margin-top: 20px;
      padding-top: 20px;
    }
  `,
  template(this: DescriptionListComponent) {
    return html`
      <div class="container" part="container">
        <slot name="description" class="description" part="description"></slot>
        <slot name="text" class="text" part="text"></slot>
        <div class="border" part="border"></div>
      </div>
    `;
  }
})
export class DescriptionListComponent extends LitElement {}
