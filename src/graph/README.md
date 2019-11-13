
# Graph Component

Declarative way of defining your API with components and simple state with template

##### Usage

```typescript
import { GraphModule } from '@rxdi/ui-kit/graph';

@Module({
  imports: [
    GraphModule.forRoot({
      uri: 'https://questups.com/api/graphql',
      pubsub: 'https://questups.com/api/graphql',
      async onRequest() {
        return new Headers();
      }
    })
  ],
})
export class AppModule {}
```


```typescript
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
          render: (res: StatusType) => html`Status is ${res.data.status.status}`,
          loading: () => html`<rx-loading></rx-loading>`,
          error: (e) => html`${e}`
        } as GraphOptions}
      >
      </rx-graph>
    `;
  }
})
export class GraphViewComponent extends LitElement {}
```

```html
<rx-graph
  .options=${{
    settings: {
      fetchPolicy: 'network-only'
    },
    fetch: `
      query status {
        status {
          status
        }
      }
    `,
    render: (res: StatusType) => html`
      Status is ${res.data.status.status}
    `,
    loading: () => html`
      <rx-loading></rx-loading>
    `,
    error: (e) => html`${e}`
  } as GraphOptions}
>
</rx-graph>
```



#### Advanced usage

Specify Error and loading templates on `forRoot` so they can be default for every request

```typescript
import { GraphModule } from '@rxdi/ui-kit/graph';

@Module({
  imports: [
    GraphModule.forRoot(
      {
        uri: 'https://countries.trevorblades.com/',
        pubsub: 'wss://countries.trevorblades.com/'
      },
      {
        error: e => {
          return html`
            <p style="color: black">
              ${e}
            </p>
          `;
        },
        loading: () => {
          return html`
            <div style="text-align: center;">
              <rx-loading palette="danger"></rx-loading>
            </div>
          `;
        }
      }
    )
  ],
})
export class AppModule {}
```




##### Simplest query component

```typescript
<rx-graph
  .options=${{
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
    render: ({ data: { continents } }) => {
      return html`
        ${continents}
      `;
    }
  }}
>
</rx-graph>
```



##### Passing state to component

`state` property can be `BehaviorSubject`, `ReplaySubject`, `Observable`, `Object`

```typescript
<rx-graph
  .options=${{
    state: {
      data: {
        continents: [
          { name: 'dada', countries: [{ name: 'dada', code: 'dada' }] }
        ]
      }
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
    render: ({ data: { continents } }) => {
      return html`
        ${continents}
      `;
    }
  }}
>
</rx-graph>
```


In case you wonder how to add `Observable`

```typescript
<rx-graph
  .options=${{
    state: new BehaviorSubject({
      data: {
        continents: [
          { name: 'dada', countries: [{ name: 'dada', code: 'dada' }] }
        ]
      }
    }),
    render: ({ data: { continents } }) => {
      return html`
        ${continents}
      `;
    }
  }}
>
</rx-graph>
```



##### Subscriptions with Graphql

```typescript
<rx-graph
  .options=${<GraphOptions>{
    fetch: `
      subscription {
        notifications {
          appUpdated
        }
      }
    `,
    render: ({
      data: {
        notifications: { appUpdated }
      }
    }) => {
      return html`
        <p style="color: black">${appUpdated}</p>
      `;
    }
  }}
>
</rx-graph>
```

GraphOptions interface is `generic` so we can specify following types for this particular `subscription`

```typescript
<GraphOptions<{notifications: {appUpdated: string}}>>
```