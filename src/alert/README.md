
# Alert Component
Display success, warning and error messages.

Pull request: https://github.com/rxdi/ui-kit/pull/12

##### Usage

```typescript
import { AlertComponent } from '@rxdi/ui-kit/alert';

@Module({
  components: [AlertComponent]
})
export class AppModule {}
```

```html
<rx-alert>text</rx-alert>
<rx-alert palette="default">text</rx-alert>
<rx-alert palette="primary">text</rx-alert>
<rx-alert palette="success">text</rx-alert>
<rx-alert palette="warning">text</rx-alert>
<rx-alert palette="danger">text</rx-alert>
```


##### Close event


```html
<rx-alert @onClose=${(alert) => {console.log(alert);}} palette="default">text</rx-alert>
```