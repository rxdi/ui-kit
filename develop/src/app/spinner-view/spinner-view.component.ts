import { Component, LitElement, html, css } from '@rxdi/lit-html';

/**
 * @customElement spinner-view-component
 */
@Component({
  selector: 'spinner-view-component',
  style: css`
  .container {
    margin: 0px auto;
    padding: 50px;
    background-color: white;
    text-align: center;
    user-select: none;
  }

  h3 {
      color: #333;
  }
`,
  template(this: SpinnerViewComponent) {
    return html`
        <div class="container">
        <h3>Regular spinner</h3>
        <rx-spinner></rx-spinner>
        <h3>Medium spinner</h3>
        <rx-spinner height="80" width="80" stroke="0.3"></rx-spinner>
        <h3>Large spinner</h3>
        <rx-spinner height="135" width="135" stroke="0.2"></rx-spinner>
        </div>
    `;
  }
})
export class SpinnerViewComponent extends LitElement {}
