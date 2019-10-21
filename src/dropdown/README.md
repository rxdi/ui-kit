# Grid Component

Pull request: https://github.com/rxdi/ui-kit/pull/20

##### Usage

```typescript
import { DropdownComponent } from '@rxdi/ui-kit/dropdown';

@Module({
  components: [DropdownComponent]
})
export class AppModule {}
```

#### Inside html

```html
<rx-dropdown
  style="margin-right: 5px;"
  .menuItems=${[
    html`
      <a href="#" class="item">You need to setup your SSL certificate!</a>
    `,
    html`
      <a href="#" class="item">You need to setup your SSL certificate!</a>
    `,
    html`
      <a href="#" class="item">You need to setup your SSL certificate!</a>
    `
  ]}
>
  <div style="margin-right: 10px;margin-top: 3px;">
    ${notification}
  </div>
</rx-dropdown>
```
