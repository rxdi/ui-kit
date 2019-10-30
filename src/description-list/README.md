# Description list Component

Pull request: https://github.com/rxdi/ui-kit/pull/28


## Usage

```typescript
import { DescriptionListComponent } from '@rxdi/ui-kit/description-list';

@Module({
  components: [DescriptionListComponent],
})
export class AppModule {}
```

```html
<rx-description>
  <div slot="description">DESCRIPTION TERM</div>
  <div slot="text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
</rx-description>
```