# Card Component

Pull request: https://github.com/rxdi/ui-kit/pull/22

## Different palettes
![Screenshot from 2019-10-21 15-32-44](https://user-images.githubusercontent.com/19847933/67205417-66a51c80-f418-11e9-9c85-17a53355a7c4.png)



## Hover

![Screenshot from 2019-10-21 15-33-35](https://user-images.githubusercontent.com/19847933/67205401-5e4ce180-f418-11e9-97c3-1966298b7d07.png)
![Screenshot from 2019-10-21 15-33-25](https://user-images.githubusercontent.com/19847933/67205402-5e4ce180-f418-11e9-9a0c-35b40ef16ff2.png)

## With Component
![Screenshot from 2019-10-21 15-34-10](https://user-images.githubusercontent.com/19847933/67205432-6c9afd80-f418-11e9-8011-5b69423ea4d4.png)



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