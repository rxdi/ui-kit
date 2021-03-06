import { Component, LitElement, property, html, async } from '@rxdi/lit-html';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rx-let',
  template(this: LetComponent) {
    return html`
      ${async(
        this.data.pipe(
          map(v =>
            v.map(
              (element, index, array) =>
                html`
                  ${this.item(element, index, array)}
                `
            )
          )
        )
      )}
    `;
  }
})
export class LetComponent extends LitElement {
  @property({ attribute: false })
  public data: Observable<any[]> = of([]);

  @property()
  public item: any = (v: any) =>
    html`
      ${v}
    `
}
