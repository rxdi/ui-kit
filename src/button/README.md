
# Button Component

Pull request: https://github.com/rxdi/ui-kit/pull/10

![Screenshot from 2019-10-18 13-36-58](https://user-images.githubusercontent.com/19847933/67087827-6274c700-f1ac-11e9-83c0-f311a7be5cb0.png)

##### Usage


```typescript
import { ButtonComponent } from '@rxdi/ui-kit/button';

@Module({
  components: [
    ButtonComponent
  ],
})
export class AppModule {}
```

```html
<rx-button>Default</rx-button>
<rx-button palette="primary">Primary</rx-button>
<rx-button palette="secondary">Secondary</rx-button>
<rx-button palette="danger">Danger</rx-button>
```


```typescript
import { Component, LitElement, html, css } from '@rxdi/lit-html';

@Component({
  selector: 'button-view-component',
  style: css`
    .container {
      background-color: white;
      text-align: center;
      padding: 50px;
    }
  `,
  template(this: ButtonViewComponent) {
    return html`
      <div class="container">
        <rx-button>Default</rx-button>
        <rx-button palette="primary">Primary</rx-button>
        <rx-button palette="secondary">Secondary</rx-button>
        <rx-button palette="danger">Danger</rx-button>
      </div>
    `;
  }
})
export class ButtonViewComponent extends LitElement {}
```
