import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Page } from '../../../../src/pagination';

/**
 * @customElement pagination-view-component
 */
@Component({
  selector: 'pagination-view-component',
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
  template(this: PaginationViewComponent) {
    return html`
      <div class="container">
        <rx-pagination
          @change=${({
            detail,
          }: CustomEvent<{ index: number; page: Page }>) => {}}
          .pages=${[
            { active: false },
            { active: false },
            { active: true },
            { active: false },
          ]}
        ></rx-pagination>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/pagination/README.md"
      ></markdown-reader>
    `;
  },
})
export class PaginationViewComponent extends LitElement {}
