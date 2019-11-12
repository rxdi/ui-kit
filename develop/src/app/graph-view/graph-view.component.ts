import { Component, LitElement, html, css, property } from '@rxdi/lit-html';
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
                  ${res.data.continents.map(
                    continent =>
                      html`
                        <rx-description
                          style="display: block; transform: translateX(-100%);"
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
                                  <rx-animation
                                    style="overflow: hidden;"
                                    .options=${({ stagger }) => ({
                                      delay: stagger(200),
                                      translateX: 0,
                                      easing: 'spring(1, 80, 10, 0)'
                                    })}
                                  >
                                    ${continent.countries.map(
                                      country =>
                                        html`
                                          <div
                                            style="padding: 10px;display: block; transform: translateX(-100%);"
                                          >
                                            <rx-card palette="secondary">
                                              <div style="padding: 50px;">
                                                <p>Name: ${country.name}</p>
                                                <p>
                                                  Country code: ${country.code}
                                                </p>
                                                <p>
                                                  Currency: ${country.currency}
                                                </p>
                                                <p>Emojy: ${country.emoji}</p>
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
export class GraphViewComponent extends LitElement {
  @property({ attribute: false })
  private expandedCountries: { [key: string]: boolean } = {};

  setActiveExpand(name: string, status: boolean) {
    this.expandedCountries = { [name]: status };
  }
}
