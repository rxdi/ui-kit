# Pagination Component

##### Usage

```typescript
import { PaginationComponent } from '@rxdi/ui-kit/pagination';

@Module({
  components: [PaginationComponent],
})
export class AppModule {}
```

##### Direct import

```typescript
import '@rxdi/ui-kit/pagination';
import { render, html } from '@rxdi/lit-html';

render(
  html`
    <rx-pagination
      @change=${({ detail }: CustomEvent<{ index: number; page: Page }>) => {}}
      .pages=${[
        { active: false },
        { active: false },
        { active: true },
        { active: false },
      ]}
    ></rx-pagination>
  `,
  document.body
);
```

```html
<rx-pagination
  @change=${({ detail }: CustomEvent<{index: number; page: Page}>) => {}}
  .pages=${[
    { active: false },
    { active: false },
    { active: true },
    { active: false },
  ]}
></rx-pagination>
```
