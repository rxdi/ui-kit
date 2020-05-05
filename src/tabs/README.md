# Tabs Component

Pull request: https://github.com/rxdi/ui-kit/pull/36

##### Usage

```typescript
import { TabsComponent } from '@rxdi/ui-kit/tabs';

@Module({
  components: [TabsComponent],
})
export class AppModule {}
```

```html
<rx-tabs
    palette="warning"
    .pages=${[
    {
        name: 'Tab 1',
        view: html`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `,
        active: true
    },
    {
        name: 'Tab 2',
        view: html`
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
        `,
        active: false
    },
    {
        name: 'Tab3',
        view: html`
          dada3
        `,
        active: false
    }
    ]}
></rx-tabs>
```

#### Tabs with History and route params
```ts
import { html, Component, LitElement } from '@rxdi/lit-html';
import { RouteParams, Router } from '@rxdi/router';

/**
 * @customElement history-component
 */
@Component({
  selector: 'history-component',
  template(this: HistoryComponent) {
    return html`
      <rx-tabs
        @change=${({ detail: { index } }) => {
          this.selectedTab = index;
          /* Pushing optimistic state */
          window.history.pushState(
            {},
            null,
            `/${index}`
          );
          /* Reloads the whole component tree */
          // this.router.go(`/${index}`);
        }}
        palette="primary"
        .pages=${[
          {
            name: 'Added notifications',
            view: html` My Tab `,
            active: false,
          },
        ].map((tab, index) => {
          if (index === this.selectedTab) {
            tab.active = true;
          } else {
            tab.active = false;
          }
          return tab;
        })}
      ></rx-tabs>
    `;
  },
})
export class HistoryComponent extends LitElement {
  /* Current tab selection */
  private selectedTab: number;

  @RouteParams()
  private params: { tab: number };

  @Router()
  private router: Router;

  OnUpdateFirst() {
    this.selectedTab = Number(this.params.tab) || 0;
  }
}
```
