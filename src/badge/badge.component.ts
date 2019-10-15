import { Component, html, css } from '@rxdi/lit-html';

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
      background: #1e87f0;
      color: #fff;
      font-size: 14px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  `,
  template(this: BadgeComponent) {
    return html`
      <span class="badge"><slot></slot></span>
    `;
  }
})
export class BadgeComponent extends HTMLElement {}
