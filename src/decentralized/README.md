# Decentralend part of the application

Gist: https://gist.github.com/Stradivario/f9bbc5fc7fe3694f5fb622ef2bcce3cb

## Usage

```html
<script src="https://ipfs.io/ipfs/QmfXGKAeDwVZF9THVCKtYRjcNrhBG6iuBStXrNoBRGimFp/index.js"></script>

<div id="app"></div>

<!-- State management -->
<script>
  const APP_STATE = 'state';
  const INITIAL_STATE = { clicked: true };

  const getState = () => Container.get(APP_STATE).asObservable()
  const getStateSync = () => Container.get(APP_STATE).getValue()
  const select = (f) => getState().pipe(map(f))

  Container.set(APP_STATE, new BehaviorSubject(INITIAL_STATE));
</script>

<!-- Initial configuration -->
<script>
  const config = {
    Application: {
      appSelector: 'app',
      module: {
        imports: [
          RouterModule.forRoot([
            {
              path: '/',
              redirect: '/home'
            },
            {
              path: '/home',
              component: 'app-home'
            },
            {
              path: '(.*)',
              component: 'not-found'
            }
          ]),
          AppComponentsModule,
          ModalModule.forRoot({
            backdropClose: true
          }),
          ReactiveUiModule.forRoot(),
          NavModule.forRoot(),
          GraphModule.forRoot(
            {
              uri: 'https://questups.com/api/graphql',
              pubsub: 'wss://pubsub.youvolio.com/subscriptions',
              async onRequest() {
                return new Headers();
              }
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
        ]
      }
    },
    Graph: {
      settings: {
        fetchPolicy: 'cache-first'
      },
      subscribe: `
        subscription {
          notifications {
            appUpdated
          }
        }
      `,
      fetch: `
        query status {
          status {
            status
          }
        }
      `,
      render: res => html`
        <div style="flex">
          <a href="/"><rx-button>HOME</rx-button></a>
          <a href="/about"><rx-button>ABOUT</rx-button></a>
        </div>
        <router-outlet></router-outlet>
      `,
      loading: () => html`
        <div style="text-align: center;">
          <rx-loading palette="danger"></rx-loading>
        </div>
      `,
      error: e =>
        html`
          ${e}
        `
    }
  };
</script>

<!-- Home -->
<script>
  Component({
    selector: 'app-home',
    template: () =>
      html`
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
            render: ({
              data: {
                status: { status }
              }
            }) => html`
              Server status ${status}
            `
          }}
        >
        </rx-graph>
        <rx-graph
          .options=${{
            state: select(s => s.clicked),
            render: (clicked, ctx) => {
              const state = ctx.get(APP_STATE);
              return html`
                <p>Rendered ${clicked}</p>
                <rx-button
                  palette="danger"
                  @click=${() => state.next({ clicked: !clicked })}
                  >Click</rx-button
                >
              `;
            }
          }}
        >
        </rx-graph>
      `
  })(
    class extends LitElement {
      OnInit() {}
    }
  );
</script>

<!-- Not Found -->
<script>
  Component({
    selector: 'not-found',
    template: () =>
      html`
        Missing
      `
  })(class extends HTMLElement {});
</script>

<script>
  BootstrapApp(config);
</script>

```

## Build instructions

Install `parcelJS`

```bash
npm i -g parcel-bundler
```

Run `parcel` inside `decentralized` folder

```bash
parcel index.html
```