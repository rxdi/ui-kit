# Table Component

Pull request: https://github.com/rxdi/ui-kit/pull/38

##### Usage

```typescript
import { TableComponent } from '@rxdi/ui-kit/table';

@Module({
  components: [TableComponent]
})
export class AppModule {}
```

```html
<rx-table
    .columns=${['Country', 'Events', 'Time']}
    .data=${[{ country: 'Bulgaria', events: 'First', time: '05.02.1990' }]}
></rx-table>
```
