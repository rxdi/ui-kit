
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
          template: (res: StatusType) => html`Status is ${res.data.status.status}`,
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
    template: (res: StatusType) => html`
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