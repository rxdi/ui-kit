import {
  Component,
  LitElement,
  html,
  css,
  property,
  unsafeCSS
} from '@rxdi/lit-html';

/**
 * @customElement rx-table
 */
@Component({
  selector: 'rx-table',
  style: css`
    div {
      box-sizing: border-box;
    }
    .table-container {
      display: block;
      margin: 2em auto;
      width: 90%;
    }
    .flag-icon {
      margin-right: 0.1em;
    }
    .flex-table {
      display: flex;
      flex-flow: row wrap;
      border-left: solid 1px #d9d9d9;
      transition: 0.5s;
    }
    .flex-table:first-of-type {
      border-top: solid 1px #1565c0;
      border-left: solid 1px #1565c0;
    }
    .flex-table:first-of-type .flex-row {
      background: #1976d2;
      color: white;
      border-color: #1565c0;
    }
    /*     .flex-table.row:nth-child(odd) .flex-row {
      background: #f4f2f1;
    } */
    .flex-table:hover {
      background: #333;
      transition: 500ms;
    }
    .flex-row {
      text-align: center;
      padding: 0.5em 0.5em;
      border-right: solid 1px #d9d9d9;
      border-bottom: solid 1px #d9d9d9;
    }
    .rowspan {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: center;
    }
    .column {
      display: flex;
      flex-flow: column wrap;
      width: 75%;
      padding: 0;
    }
    .column .flex-row {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      padding: 0;
      border: 0;
      border-bottom: solid 1px #d9d9d9;
    }
    .column .flex-row:hover {
      background: #666;
      transition: 500ms;
    }
    .flex-cell {
      width: calc(100% / 3);
      text-align: center;
      padding: 0.5em 0.5em;
      border-right: solid 1px #d9d9d9;
    }
    @media all and (max-width: 767px) {
      .flex-row {
        width: calc(100% / 3);
      }
      .flex-row.first {
        width: 100%;
      }
      .column {
        width: 100%;
      }
    }
    @media all and (max-width: 430px) {
      .flex-table {
        border-top: 1px solid white;
        margin-top: 20px;
      }
      .flex-table .flex-row {
        border-bottom: 0;
      }
      .flex-table .flex-row:last-of-type {
        border-bottom: solid 1px #d9d9d9;
      }
      .header .flex-row {
        border-bottom: solid 1px;
      }
      .flex-row {
        width: 100%;
        background: darkslategray;
        border-bottom: 1px solid white;
      }
      .flex-row.first {
        width: 100%;
        border-bottom: solid 1px #d9d9d9;
      }
      .column {
        width: 100%;
      }
      .column .flex-row {
        border-bottom: solid 1px #d9d9d9;
      }
      .flex-cell {
        width: 100%;
      }
    }
  `,
  template(this: TableComponent) {
    return html`
      <style>
        .flex-row {
          width: calc(100% / ${unsafeCSS(this.columns.length)});
        }
      </style>
      <div class="table-container" role="table" aria-label="Destinations">
        <div class="flex-table header" role="rowgroup">
          ${this.columns.map((c, index) => {
            if (index === 0) {
              return html`
                <div class="flex-row first" role="columnheader">${c}</div>
              `;
            }
            return html`
              <div class="flex-row" role="columnheader">${c}</div>
            `;
          })}
        </div>
        ${this.data.map(
          val => html`
            <div class="flex-table row" role="rowgroup">
              ${Object.values(val).map(
                (v, i) => html`
                  <div class="flex-row ${i === 0 ? 'first' : ''}" role="cell">
                    ${v}
                  </div>
                `
              )}
            </div>
          `
        )}
        <!--         <div class="flex-table row" role="rowgroup">
          <div class="flex-row rowspan first">
            United States
          </div>
          <div class="column">
            <div class="flex-row">
              <div class="flex-cell" role="cell">
                Napa and Sonoma Wine Country Tour
              </div>
              <div class="flex-cell" role="cell">5 Sep, 9p.m.</div>
              <div class="flex-cell" role="cell">US$600</div>
            </div>

            <div class="flex-row" role="rowgroup">
              <div class="flex-cell" role="cell">
                Day Trip to Martha's Vineyard
              </div>
              <div class="flex-cell" role="cell">12 Sep, 5p.m.</div>
              <div class="flex-cell" role="cell">US$600</div>
            </div>
          </div>
        </div> -->
      </div>
    `;
  }
})
export class TableComponent extends LitElement {
  @property({ type: Array })
  columns: any[] = [];

  @property({ type: Array })
  data: any[] = [];
}
