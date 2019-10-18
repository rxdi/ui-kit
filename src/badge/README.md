
# Badge Component

Pull request: https://github.com/rxdi/ui-kit/pull/6

![Screenshot from 2019-10-15 16-20-32](https://user-images.githubusercontent.com/19847933/66835183-be024300-ef67-11e9-9645-749e446c86c8.png)

##### Basic Usage

```html
<rx-badge>1</rx-badge>
```

##### Change color

```html
<rx-badge color="#fff">1</rx-badge>
```

##### Change background

```html
<rx-badge background="#1e87f0">1</rx-badge>
```

##### Palettes

```html
<rx-badge palette="default">1</rx-badge>
<rx-badge palette="primary">1</rx-badge>
<rx-badge palette="secondary">1</rx-badge>
```


##### Example

```typescript
import { html, Component, LitElement, css } from '@rxdi/lit-html';

/**
 * @customElement badge-view-component
 */
@Component({
  selector: 'badge-view-component',
  style: css`
    rx-badge {
      display: block;
    }
  `,
  template(this: BadgeViewComponent) {
    return html`
      <rx-badge background="red" color="white">10</rx-badge>
      <rx-badge palette="primary">100</rx-badge>
      <rx-badge palette="primary">1000</rx-badge>
      <rx-badge palette="primary">10000</rx-badge>
      <rx-badge palette="secondary">100000</rx-badge>
    `;
  }
})
export class BadgeViewComponent extends LitElement {}
```


