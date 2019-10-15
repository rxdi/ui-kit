import { html, Component, LitElement, css } from '@rxdi/lit-html';
import { DynamicCssService } from '@rxdi/ui-kit/services/dynamic-css/dynamic-css';
import { Inject } from '@rxdi/core';

/**
 * @customElement badge-view-component
 */
@Component({
  selector: 'badge-view-component',
  style: css`
    rx-badge {
      display: block;
    }
  `,
  template(this: BadgeViewComponent) {
    return html`
      <rx-badge background="red" color="white">10</rx-badge>
      <rx-badge palette="primary">100</rx-badge>
      <rx-badge palette="primary">1000</rx-badge>
      <rx-badge palette="primary">10000</rx-badge>
      <rx-badge palette="secondary">100000</rx-badge>
    `;
  }
})
export class BadgeViewComponent extends LitElement {
  @Inject(DynamicCssService)
  private dynamicCss: DynamicCssService;
  OnInit() {
    setTimeout(() => this.dynamicCss.changeStyle({
      default: css``,
      primary: css``,
      secondary: css``
    }), 5000);
  }
}
