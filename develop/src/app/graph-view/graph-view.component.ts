import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Settings } from '@rxdi/ui-kit/graph';
import { IQuery } from '../../introspection';

@Component({
  selector: 'graph-view-component',
  style: css`
    .container {
      margin: 0 auto;
      width: 630px;
      padding: 50px;
      background-color: white;
    }
  `,
  template(this: GraphViewComponent) {
    return html`
      <div class="container">
        <rx-graph
          .options=${{
            settings: <Settings>{
              fetchPolicy: 'cache-first'
            },
            fetch: `
              query {
                listConsultants {
                  rows {
                    id
                    biography
                  }
                }
                status {
                  status
                }
              }
            `,
            template: (res: { data: IQuery }) => {
              return html`
                <rx-animation
                  style="overflow: hidden;"
                  .options=${({ stagger }) => ({
                    delay: stagger(200),
                    translateX: 0,
                    easing: 'spring(1, 80, 10, 0)'
                  })}
                >
                  ${res.data.listConsultants.rows.map(
                    u =>
                      html`
                        <rx-description
                          style="display: block; transform: translateX(-100%);"
                        >
                          <div slot="description" style="background-color: rgba(0, 0, 0, 0.1);"><p>${u.id}</p></div>
                          <div slot="text">
                            ${u.biography || 'no-biography'}
                          </div>
                        </rx-description>
                      `
                  )}
                </rx-animation>
              `;
            },
            loading: () => {
              return html`
                <rx-loading></rx-loading>
              `;
            },
            error: e => {
              return html`
                ${e}
              `;
            }
          }}
        >
        </rx-graph>
      </div>
    `;
  }
})
export class GraphViewComponent extends LitElement {}
