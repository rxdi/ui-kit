# Card Component

Pull request: https://github.com/rxdi/ui-kit/pull/22

## Usage

```typescript
import { CardComponent } from '@rxdi/ui-kit/card';

@Module({
  components: [
    CardComponent
  ],
})
export class AppModule {}
```


```html
<rx-card>Default</rx-card>
<rx-card palette="primary">Default</rx-card>
<rx-card palette="secondary">Secondary</rx-card>
<rx-card palette="warning">Warning</rx-card>
<rx-card palette="danger">Danger</rx-card>
```


```typescript
import { Component, html, LitElement, css } from '@rxdi/lit-html';

@Component({
  selector: 'card-view',
  style: css`
    .container {
      padding: 50px;
      margin-bottom: 20px;
      background-color: white;
    }
    .margin {
      margin-bottom: 20px;
    }
    .padding {
      padding: 50px;
    }
  `,
  template(this: CardViewComponent) {
    return html`
      <div class="container">
      <rx-card>
          <div class="margin padding">Default</div>
        </rx-card>
        <rx-card palette="primary">
          <div class="margin padding">Primary</div>
        </rx-card>
        <rx-card palette="secondary">
          <div class="margin padding">Secondary</div>
        </rx-card>
        <rx-card palette="warning">
          <div class="margin padding">Warning</div>
        </rx-card>
        <rx-card palette="danger">
          <div class="margin padding">Danger</div>
        </rx-card>
        <rx-card>
          <article-view-component></article-view-component>
        </rx-card>
      </div>
    `;
  }
})
export class CardViewComponent extends LitElement {}

```