import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { GraphOptions } from '../../../../src/graph';
import { Form, FormGroup } from '@rxdi/forms';

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
        <div style="text-align: center">
          <!-- <rx-graph
            .options=${<
            GraphOptions<{ notifications: { appUpdated: string } }>
          >{
            fetch: `
                subscription {
                  notifications {
                    appUpdated
                  }
                }
              `,
            render: ({
              data: {
                notifications: { appUpdated },
              },
            }) => {
              return html` <p style="color: black">${appUpdated}</p> `;
            },
          }}
          >
          </rx-graph> -->
        </div>
        <form name="my-form">
          <input
            name="textArea"
            type="hidden"
            value=${this.form.value.textArea}
          />
        </form>

        <rx-monad>
          <!-- <rx-state
            .value=${{
            data: {
              continents: [
                { name: 'dada', countries: [{ name: 'dada', code: 'dada' }] },
              ],
            },
          }}
          ></rx-state> -->
          <rx-settings .value=${{ fetchPolicy: 'cache-first' }}></rx-settings>
          <rx-fetch
            query="query {
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
            "
          ></rx-fetch>
          <rx-render
            .state=${(
              { collapsedContinent, data: { continents } },
              setState
            ) => html`
              <rx-animation overflow="hidden" .options=${this.options}>
                <rx-for .of=${continents}>
                  <rx-let
                    .item=${(continent) => html`
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
                          <div style="color: black"></div>
                          ${collapsedContinent === continent.name
                            ? html`
                                <rx-button
                                  palette="danger"
                                  @click=${() => {
                                    setState({
                                      data: { continents },
                                    });
                                  }}
                                  >Collapse</rx-button
                                >
                                <rx-animation
                                  overflow="hidden"
                                  .options=${this.options}
                                >
                                  <rx-for .of=${continent.countries}>
                                    <rx-let
                                      .item=${(country) => html`
                                        <div
                                          style="padding: 50px;display: block;transform: translateX(-100%) ;text-align: center"
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
                                      `}
                                    ></rx-let>
                                  </rx-for>
                                </rx-animation>
                              `
                            : html`
                                <rx-button
                                  palette="primary"
                                  @click=${() =>
                                    setState({
                                      data: { continents },
                                      collapsedContinent: continent.name,
                                    })}
                                  >Expand</rx-button
                                >
                              `}
                        </div>
                      </rx-description>
                    `}
                  ></rx-let>
                </rx-for>
              </rx-animation>
            `}
          ></rx-render>
        </rx-monad>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/graph/README.md"
      ></markdown-reader>
    `;
  },
})
export class GraphViewComponent extends LitElement {
  @Form({
    name: 'my-form',
    strategy: 'input',
  })
  private form = new FormGroup({
    textArea: '',
  });

  private options = () => ({
    duration: 500,
    translateX: 0,
    easing: 'easeInOutSine',
  });
}
