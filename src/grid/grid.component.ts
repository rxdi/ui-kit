import {
  html,
  Component,
  LitElement,
  property,
  async,
  TemplateResult
} from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { map, switchMap } from 'rxjs/operators';
import { combineLatest, of, Observable, isObservable, from } from 'rxjs';
import { ResponsiveService } from '@rxdi/ui-kit/services';
import { MAIN_CSS } from '@rxdi/ui-kit/styles';

/**
 * @customElement rx-grid
 */
@Component({
  selector: 'rx-grid',
  styles: [MAIN_CSS],
  template(this: GridComponent) {
    return html`
      ${async(
        from(isObservable(this.$items) ? this.$items : of(this.$items))
          .pipe(
            map(items =>
              items.length ? items : Array.from(Array(this.fill).keys())
            ),
            switchMap(c =>
              combineLatest(
                of(c),
                this.responsive.width.pipe(
                  map(width => this.calculateColumns(width))
                )
              )
            ),
            switchMap(([c, columns]) =>
              combineLatest([
                of(c),
                of(this.calculateRows(c.length, columns)),
                of(columns)
              ])
            )
          )
          .pipe(
            map(
              ([components, rows, columns]) => html`
                ${Array.from(Array(rows).keys()).map(
                  i => html`
                    <div class="flex">
                      ${this.calculateTemplateColumns(components, i, columns)}
                    </div>
                  `
                )}
              `
            )
          )
      )}
    `;
  }
})
export class GridComponent extends LitElement {
  @Inject(ResponsiveService)
  private responsive: ResponsiveService;

  @property({ type: Number })
  fill: number;
  @property({ attribute: false })
  $items: Observable<any[]> | any[] = of([]);

  @property({ attribute: false })
  template: (item: any) => TemplateResult;

  @property({ type: Number })
  columns: number;

  @property({ type: Number })
  rows: number;

  private calculateColumns(width: number) {
    let columns: number;
    if (this.columns) {
      return this.columns;
    }
    if (width < 700) {
      columns = 1;
    } else if (width < 1000) {
      columns = 2;
    } else if (width < 1450) {
      columns = 3;
    } else if (width > 1450) {
      columns = 4;
    }
    return columns;
  }

  private calculateRows(itemsLength: number, columns: number) {
    if (this.rows) {
      return this.rows;
    } else {
      return Math.round(itemsLength / columns) + 2;
    }
  }

  private calculateTemplateColumns(
    items: any[],
    index: number,
    columns: number
  ) {
    const calculated = index * columns;
    const offset = calculated - columns;
    return html`
      <div class="flex center">
        ${items.length
          ? html`
              ${items
                .slice(offset, calculated)
                .map(item => this.getTemplate(item))}
            `
          : 'No components found'}
      </div>
    `;
  }

  private getTemplate(item: any) {
    if (!item) {
      return html``;
    }
    return html`
      ${this.template
        ? this.template(item)
        : html`
            ${item}
          `}
      <span class="spacer"></span>
    `;
  }
}
