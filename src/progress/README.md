# Progress Component

##### Usage

```typescript
import { ProgressComponent } from '@rxdi/ui-kit/progress';

@Module({
  components: [ProgressComponent]
})
export class AppModule {}
```

```html
<h4>Simple</h4>
<rx-progress value="25" palette="primary"></rx-progress>
<h4>Rounded</h4>
<rx-progress value="50" rounded palette="danger"></rx-progress>
<h4>Height</h4>
<rx-progress value="75" height="20" palette="warning"></rx-progress>
<h4>Label</h4>
<rx-progress value="45" height="20" label palette="primary"></rx-progress>
```

```typescript
import { Component, LitElement, html, css } from '@rxdi/lit-html';

@Component({
  selector: 'progress-view-component',
  style: css`
    .container {
      background-color: white;
      text-align: center;
      padding: 50px;
    }
  `,
  template(this: ProgressViewComponent) {
    return html`
      <div class="container">
        <rx-progress value="25" palette="primary"></rx-progress>
      </div>
    `;
  }
})
export class ProgressViewComponent extends LitElement {}
```
