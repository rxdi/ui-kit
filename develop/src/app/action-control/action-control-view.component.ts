import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Page } from '@rxdi/ui-kit/pagination/pagination.component';

/**
 * @customElement action-view-pagination-view-component
 */
@Component({
  selector: 'action-view-pagination-view-component',
  style: css`
    .container {
      margin: 50px auto;
      width: 200px;
      padding: 50px;
      background-color: white;
      text-align: center;
      user-select: none;
    }
  `,
  template(this: ActionControlViewComponent) {
    return html`
      <div class="container">
      dadadadadaad
      </div>
      <!-- <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/pagination/README.md"
      ></markdown-reader> -->
    `;
  },
})
export class ActionControlViewComponent extends LitElement {}
