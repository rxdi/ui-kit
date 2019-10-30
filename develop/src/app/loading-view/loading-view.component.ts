import { Component, LitElement, html, css, property } from '@rxdi/lit-html';

/**
 * @customElement lading-view-component
 */
@Component({
  selector: 'lading-view-component',
  style: css`
    .container {
      margin: 50px auto;
      width: 300px;
      text-align: center;
      user-select: none;
    }
  `,
  template(this: LoadingViewComponent) {
    return html`
      <div class="container">
        <h3>Remove loading after 3 seconds</h3>
        <rx-loading .if=${() => this.loading}></rx-loading>
        <h3>Infinite</h3>
        <rx-loading></rx-loading>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/loading/README.md"
      ></markdown-reader>
    `;
  }
})
export class LoadingViewComponent extends LitElement {
  @property({ type: Boolean })
  loading = true;

  OnUpdateFirst() {
    setTimeout(() => (this.loading = false), 3000);
  }
}
