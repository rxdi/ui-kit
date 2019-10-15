import { html, Component, LitElement, css } from '@rxdi/lit-html';

/**
 * @customElement badge-view-component
 */
@Component({
  selector: 'badge-view-component',
  style: css`rx-badge { display: block;}`,
  template(this: BadgeViewComponent) {
    return html`
    <rx-badge>10</rx-badge>
    <rx-badge>100</rx-badge>
    <rx-badge>1000</rx-badge>
    <rx-badge>10000</rx-badge>
    <rx-badge>100000</rx-badge>
    `;
  }
})
export class BadgeViewComponent extends LitElement {}
