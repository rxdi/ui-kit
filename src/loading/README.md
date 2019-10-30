# Loading Component

Pull request: https://github.com/rxdi/ui-kit/pull/32

##### Usage

```typescript
import { LoadingComponent } from '@rxdi/ui-kit/loading';

@Module({
  components: [LoadingComponent]
})
export class AppModule {}
```

```html
<rx-loading .if=${() => true}></rx-loading>
<rx-loading></rx-loading>
```
