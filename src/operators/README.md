# Reactive Operators

```typescript
import { Component, html } from '@rxdi/lit-html';
import '../../../../src/operators';
import { ReactiveElement } from '../../../../src/';
import { IQuery, IContinent } from '../../introspection';

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
        <rx-state .value=${this.select(res => res.data.randomName)}></rx-state>
        <rx-render
          .state=${name => html`
            <p>${name}</p>
          `}
        >
        </rx-render>
      </rx-monad>

      <div>
        <rx-button palette="danger" @click=${() => this.generateString()}>
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
            <rx-for .of=${continents}>
              <rx-let .item=${({ name }: IContinent) => name}></rx-let>
            </rx-for>
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
    `;
  }
})
export class OperatorsViewComponent extends ReactiveElement<{
  randomName: string;
}> {
  OnInit() {
    this.setState({ randomName: 'MyRandomValue' });
  }
  generateString() {
    this.setState({
      randomName: Math.random()
        .toString(36)
        .substring(7)
    });
  }
}
```



## Subscriptions

```html
<rx-monad>
  <rx-fetch subscribe="{ notifications { appUpdated } }"></rx-fetch>
  <rx-render
    .state=${({
      data: {
        notifications: { appUpdated }
      }
    }) => html`<p>${appUpdated}</p>`}
  ></rx-render>
</rx-monad>
```


## Queries

```html
<rx-monad>
  <rx-fetch
    query="{
      continents {
        name
      }
    }"
  ></rx-fetch>
  <rx-render
    .state=${({ data: { continents } }) => html`
      <rx-for .of=${continents}>
        <rx-let .item=${({ name }) => name}></rx-let>
      </rx-for>
    `}
  >
  </rx-render>
</rx-monad>
```