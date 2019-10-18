
# Label Component

Pull request: https://github.com/rxdi/ui-kit/pull/16

# Screenshots (optional)
![Screenshot from 2019-10-18 16-46-26](https://user-images.githubusercontent.com/19847933/67099553-d91ebe00-f1c6-11e9-9036-049a73da6853.png)


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

