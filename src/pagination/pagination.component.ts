import {
  html,
  Component,
  LitElement,
  css,
  property,
  classMap,
} from '@rxdi/lit-html';

export interface Page {
  active: boolean;
  value?: number;
}

/**
 * @customElement rx-pagination
 */
@Component({
  selector: 'rx-pagination',
  style: css`
    .rx-pagination {
      display: flex;
      flex-wrap: wrap;
      margin: 0px;
      padding: 0;
      margin-left: -20px;
      list-style: none;
    }

    .rx-pagination > * {
      flex: none;
      padding-left: 20px;
      position: relative;
    }

    .rx-pagination > .rx-active > * {
      color: #5a5a5a;
    }

    a:active {
      color: #a3a3a3;
    }

    a:hover {
      color: #888888;
    }

    li a {
      cursor: pointer;
      font-size: 16px;
      color: #b9b9b9;
    }
    .rx-icon:not(.rx-preserve) [stroke*='#']:not(.rx-preserve) {
      stroke: currentcolor;
    }
  `,
  template(this: PaginationComponent) {
    return html`
      <ul class="rx-pagination" rx-margin="">
        <li class="rx-first-column">
          <a
            ><span
              @click=${() => this.prev()}
              class="rx-icon rx-pagination-previous"
              ><svg width="7" height="14" viewBox="0 0 7 12">
                <polyline
                  fill="none"
                  stroke="#000"
                  stroke-width="1.5"
                  points="6 1 1 6 6 11"
                ></polyline></svg></span
          ></a>
        </li>
        ${this.pages.map(
          (v, index) => html`
            <li class=${classMap({ 'rx-active': v.active })}>
              <a @click=${() => this.clicked(index)}>${v.value || index + 1}</a>
            </li>
          `
        )}
        <li>
          <a
            ><span
              @click=${() => this.next()}
              class="rx-icon rx-pagination-next"
              ><svg width="7" height="14" viewBox="0 0 7 12">
                <polyline
                  fill="none"
                  stroke="#000"
                  stroke-width="1.5"
                  points="1 1 6 6 1 11"
                ></polyline></svg></span
          ></a>
        </li>
      </ul>
    `;
  },
})
export class PaginationComponent extends LitElement {
  @property({ type: Array })
  public pages: Page[] = [];

  private prev() {
    const index = this.pages.findIndex((v) => v.active);
    if (index === 0) {
      return;
    }
    this.pages = this.pages.filter((p, i) => {
      if (i === index - 1) {
        p.active = true;
      } else {
        p.active = false;
      }
      return p;
    });
  }

  private next() {
    const index = this.pages.findIndex((v) => v.active);
    if (index + 1 === this.pages.length) {
      return;
    }
    this.pages = this.pages.filter((p, i) => {
      if (i === index + 1) {
        p.active = true;
      } else {
        p.active = false;
      }
      return p;
    });
  }

  private clicked(index: number) {
    this.pages = this.pages.map((p, i) => {
      if (i === index) {
        this.dispatchEvent(
          new CustomEvent('change', {
            detail: { index: index + 1, page: p },
          })
        );
        p.active = true;
      } else {
        p.active = false;
      }
      return p;
    });
  }
}
