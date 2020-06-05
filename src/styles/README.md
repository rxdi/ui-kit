

#### Animations


```typescript
import {
  LitElement,
  Component,
  html,
  css,
  query,
  OnUpdateFirst,
} from '@rxdi/lit-html';
import { Animations, animateElement } from '@rxdi/ui-kit/styles/animations';

/**
 * @customElement table-view-component
 */
@Component({
  selector: 'table-view-component',
  style: css`
    ${Animations}
    .container {
      margin: 0px auto;
      padding: 50px;
      text-align: center;
      user-select: none;
    }
  `,
  template(this: TableViewComponent) {
    return html`
      <div class="container">
       Animated Content
      </div>
    `;
  }
})
export class TableViewComponent extends LitElement implements OnUpdateFirst {
  @query('.container')
  private container: HTMLElement;

  OnUpdateFirst() {
    animateElement(this.container, 'bounceInDown', 'fast');
  }
}
```


Speed
```ts
type Speed = 'fast' | 'faster' | 'fastest' | 'slow' | 'slower';
```