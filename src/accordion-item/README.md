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
import { Tab } from '@rxdi/ui-kit/tabs';
/**
 * @customElement history-component
 */
@Component({
  selector: 'history-component',
  template(this: HistoryComponent) {
    return html`
      <rx-tabs
        @change=${({ detail: { index, tab } }) => {
          console.log(index, tab);
        }}
        palette="primary"
        .pages=${this.tabs}
      ></rx-tabs>
    `;
  },
})
export class HistoryComponent extends LitElement {
  @RouteParams()
  private params: { tab: number };

  private selectedTab = 0;

  tabs: Tab[];

  OnUpdateFirst() {
    this.selectedTab = this.params.tab || this.selectedTab;
    this.tabs = [
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
    });
  }
}
```
