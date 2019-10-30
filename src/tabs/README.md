# Tabs Component

Pull request: https://github.com/rxdi/ui-kit/pull/36

##### Usage

```typescript
import { TabsComponent } from '@rxdi/ui-kit/tabs';

@Module({
  components: [TabsComponent]
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