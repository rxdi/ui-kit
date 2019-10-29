import { LitElement, Component, html, css } from '@rxdi/lit-html';

@Component({
  selector: 'dotnav-view-component',
  style: css`
    .container {
      padding: 50px;
      background: white;
      color: #666;
    }
  `,
  template(this: DotnavViewComponent) {
    return html`
      <div class="container">
      <h1>Horizontal</h1>
        <rx-dotnav orientation="row">
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </rx-dotnav>
        <h1>Vertical</h1>
        <rx-dotnav orientation="column">
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </rx-dotnav>
      </div>
    `;
  }
})
export class DotnavViewComponent extends LitElement {}
