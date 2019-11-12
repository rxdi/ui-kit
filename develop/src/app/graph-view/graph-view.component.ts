import { Component, LitElement, html } from '@rxdi/lit-html';
import { Settings } from '@rxdi/ui-kit/graph';
import gql from 'graphql-tag';

interface StatusType {
  data: { status: { status: string } };
}

@Component({
  selector: 'graph-view-component',
  template(this: GraphViewComponent) {
    return html`
      <rx-graph
        .options=${{
          settings: this.settings,
          fetch: this.fetch,
          template: this.template,
          loading: this.loading,
          error: this.error
        }}
      >
      </rx-graph>
    `;
  }
})
export class GraphViewComponent extends LitElement {
  private settings: Settings = {
    fetchPolicy: 'cache-first'
  };

  private fetch = gql`
    query status {
      status {
        status
      }
    }
  `;

  private template = (res: StatusType) => {
    return html`
      Status is ${res.data.status.status}
    `;
  }

  private loading = () => {
    return html`
      <rx-loading></rx-loading>
    `;
  }

  private error = e => {
    return html`
      ${e}
    `;
  }
}
