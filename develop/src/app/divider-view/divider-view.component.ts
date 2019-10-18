import { Component, html, LitElement, css } from '@rxdi/lit-html';

/**
 * @customElement divider-view-component
 */
@Component({
  selector: 'divider-view-component',
  style: css`
    .container {
      padding: 50px;
      background: white;
      color: #666;
    }
  `,
  template(this: DividerViewComponent) {
    return html`
      <div class="container">
        <h1>Regular Divider</h1>
        <rx-divider></rx-divider>

        <h1>Icon Divider</h1>
        <rx-divider type="icon"></rx-divider>
      </div>
    `;
  }
})
export class DividerViewComponent extends LitElement {}
