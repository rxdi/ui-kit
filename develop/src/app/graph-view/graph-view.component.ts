import { Component, LitElement, html } from '@rxdi/lit-html';
import { GraphOptions } from '@rxdi/ui-kit/graph';

interface StatusType {
  data: { status: { status: string } };
}

@Component({
  selector: 'graph-view-component',
  template(this: GraphViewComponent) {
    return html`
      <rx-graph
        .options=${{
          settings: {
            fetchPolicy: 'cache-first'
          },
          fetch: `
            query status {
              status {
                status
              }
            }
          `,
          template: (res: StatusType) => html`
            Status is ${res.data.status.status}
          `,
          loading: html`
            <rx-loading></rx-loading>
          `
        } as GraphOptions}
      >
      </rx-graph>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/graph/README.md"
      ></markdown-reader>
    `;
  }
})
export class GraphViewComponent extends LitElement {}
