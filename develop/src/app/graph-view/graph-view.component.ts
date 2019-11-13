import { Component, LitElement, html, css, property } from '@rxdi/lit-html';
import { GraphOptions } from '@rxdi/ui-kit/graph';
import { IQuery } from '../../introspection';
// import fetch from './get-continents.graphql';

@Component({
  selector: 'graph-view-component',
  style: css`
    .container {
      margin: 0 auto;
      background-color: white;
    }
  `,
  template(this: GraphViewComponent) {
    return html`
      <div class="container">
        <rx-graph
          .options=${<GraphOptions>{
            settings: {
              fetchPolicy: 'cache-first'
            },
            fetch: `
              query {
                continents {
                  name
                  countries {
                    code
                    name
                    currency
                    emoji
                  }
                }
              }
            `,
            template: ({ data: { continents } }: { data: IQuery }) => {
              return html`
                <rx-animation overflow="hidden" .options=${this.animation}>
                  ${continents.map(
                    continent =>
                      html`
                        <rx-description
                          style="display: block; transform: translateX(-100%);padding: 50px;"
                        >
                          <div
                            slot="description"
                            style="background-color: rgba(0, 0, 0, 0.1);"
                          >
                            <p>
                              ${continent.name} Countries:
                              ${continent.countries.length}
                            </p>
                          </div>
                          <div slot="text">
                            ${this.expandedCountries[continent.name]
                              ? html`
                                  <rx-button
                                    palette="danger"
                                    @click=${() =>
                                      this.setActiveExpand(
                                        continent.name,
                                        false
                                      )}
                                    >Collapse</rx-button
                                  >
                                  <rx-animation overflow="hidden" .options=${this.animation}>
                                    ${continent.countries.map(
                                      country =>
                                        html`
                                          <div
                                            style="padding: 50px;display: block; transform: translateX(-100%);text-align: center"
                                          >
                                            <rx-card palette="secondary">
                                              <div style="padding: 50px;">
                                                <p>
                                                  Name: ${country.name}
                                                </p>
                                                <p>
                                                  Country code: ${country.code}
                                                </p>
                                                <p>
                                                  Currency: ${country.currency}
                                                </p>
                                                <p>
                                                  Emojy: ${country.emoji}
                                                </p>
                                              </div>
                                            </rx-card>
                                          </div>
                                        `
                                    )}
                                  </rx-animation>
                                `
                              : html`
                                  <rx-button
                                    palette="primary"
                                    @click=${() =>
                                      this.setActiveExpand(
                                        continent.name,
                                        true
                                      )}
                                    >Expand</rx-button
                                  >
                                `}
                          </div>
                        </rx-description>
                      `
                  )}
                </rx-animation>
              `;
            },
            loading: () => {
              return html`
                <div style="text-align: center;">
                  <rx-loading palette="danger"></rx-loading>
                </div>
              `;
            },
            error: e => {
              return html`
                <p style="color: black">
                  ${e}
                </p>
              `;
            }
          }}
        >
        </rx-graph>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/graph/README.md"
      ></markdown-reader>
    `;
  }
})
export class GraphViewComponent extends LitElement {
  @property({
    attribute: false
  })
  private expandedCountries: {
    [key: string]: boolean;
  } = {};

  private animation = ({ stagger }) => ({
    delay: stagger(200),
    translateX: 0,
    easing: 'spring(1, 80, 10, 0)'
  })

  private setActiveExpand(name: string, status: boolean) {
    this.expandedCountries = {
      [name]: status
    };
  }
}
