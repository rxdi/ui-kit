import { Component, LitElement, html, property, async } from '@rxdi/lit-html';
import { of, isObservable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GraphOptions } from '@rxdi/ui-kit/graph';

@Component({
  selector: 'rx-for',
  template: () =>
    html`
      <slot></slot>
    `
})
export class ForEachComponent extends LitElement {
  @property()
  public of: any[] | Observable<any[]> = of([]);
  OnUpdate() {
    const slotNode = this.shadowRoot.querySelector('slot').assignedNodes()[0];
    const letElement = slotNode.nextSibling as LetComponent;
    if (isObservable(this.of)) {
      letElement.data = this.of;
    } else {
      letElement.data = of(this.of);
    }
  }
}

@Component({
  selector: 'rx-let',
  template(this: LetComponent) {
    return html`
      ${async(
        this.data.pipe(
          map(v =>
            v.map(
              e =>
                html`
                  ${this.i(e)}
                `
            )
          )
        )
      )}
    `;
  }
})
export class LetComponent extends LitElement {
  @property()
  public data: Observable<any[]> = of([]);

  @property()
  public i: any = (v: any) =>
    html`
      ${v}
    `
}

@Component({
  selector: 'operators-view',
  template(this: OperatorsViewComponent) {
    return html`
      <div id="pesho">
        <rx-graph
          .options=${<GraphOptions<string[]>>{
            state: { data: ['1', '2'] },
            fetch: ``,
            render: ({ data }) => html`
              <rx-for .of=${data}>
                <rx-let
                  .i=${v =>
                    html`
                      ${v}
                    `}
                ></rx-let>
              </rx-for>
            `
          }}
        >
        </rx-graph>

      <rx-space>
        <rx-fetch query="{ status { status }}"></rx-fetch>
        <rx-render
          .t=${({ status: { status } }) => html`
            ${status}
          `}
        ></rx-render>
      </rx-space>
      </div>

      ${['omg2', 'pgaga'].map(
        v =>
          html`
            ${v}
          `
      )}
    `;
  }
})
export class OperatorsViewComponent extends LitElement {
  data = new BehaviorSubject([]);
  OnInit() {
    let value = 0;
    setInterval(() => {
      value++;
      this.data.next([value, value + 1]);
    }, 1000);
  }
}
