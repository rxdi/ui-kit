
# Label Component

Pull request: https://github.com/rxdi/ui-kit/pull/16

##### Usage

```typescript
import { LabelComponent } from '@rxdi/ui-kit/label';

@Module({
  components: [
    LabelComponent
  ],
})
export class AppModule {}
```

```html
<rx-label>Default</rx-label>
<rx-label palette="primary">Primary</rx-label>
<rx-label palette="secondary">Secondary</rx-label>
<rx-label palette="warning">Warning</rx-label>
<rx-label palette="danger">Danger</rx-label>
```

