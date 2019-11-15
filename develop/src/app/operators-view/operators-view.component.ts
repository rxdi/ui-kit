import { Component, html } from '@rxdi/lit-html';
import '../../../../src/operators';
import { ReactiveElement } from '../../../../src/';
import { IQuery, IContinent } from '../../introspection';
import { Inject } from '@rxdi/core';

interface IQueryData {
  data: IQuery;
}

@Component({
  selector: 'operators-view',
  template(this: OperatorsViewComponent) {
    return html`
      <rx-for .of=${['IterableItem 1', 'Iterable Item 2']}>
        <rx-let
          .item=${v =>
            html`
              ${v}
            `}
        ></rx-let>
      </rx-for>

      <rx-monad>
        <rx-state .value=${this.select(res => res.randomName)}></rx-state>
        <rx-render
          .state=${name => html`
            <p>${name}</p>
          `}
        >
        </rx-render>
      </rx-monad>

      <!-- Lenses -->
      <rx-monad>
        <rx-state .value=${{pesho: { gosho: 'omgddddddddddddd'}}}></rx-state>
        <rx-lens match="pesho.gosho"></rx-lens>
        <rx-render></rx-render>
      </rx-monad>
      <div>
        <rx-button
          palette="danger"
          @click=${() => {
            this.setState({
              randomName: Math.random()
                .toString(36)
                .substring(7)
            });
          }}
        >
          Random String
        </rx-button>
      </div>

      <rx-monad>
        <rx-settings
          .value=${{
            fetchPolicy: 'cache-first'
          }}
        ></rx-settings>
        <rx-fetch
          query="{
            continents {
              name
            }
          }"
        ></rx-fetch>
        <rx-render
          .state=${({ data: { continents } }: IQueryData) => html`
            <ol>
              <rx-for .of=${continents}>
                <rx-let
                  .item=${({ name }: IContinent) =>
                    html`
                      <li>${name}</li>
                    `}
                ></rx-let>
              </rx-for>
            </ol>
          `}
        >
        </rx-render>
      </rx-monad>

      <rx-monad>
        <rx-fetch subscribe="{ notifications { appUpdated } }"></rx-fetch>
        <rx-render
          .state=${({
            data: {
              notifications: { appUpdated }
            }
          }) =>
            html`
              <p>${appUpdated}</p>
            `}
        ></rx-render>
      </rx-monad>

      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/operators/README.md"
      ></markdown-reader>
    `;
  }
})
export class OperatorsViewComponent extends ReactiveElement<{
  randomName: string;
}> {}
