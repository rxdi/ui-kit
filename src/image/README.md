
# Image Component

Pull request: https://github.com/rxdi/ui-kit/pull/4

![Screenshot from 2019-10-15 15-54-54](https://user-images.githubusercontent.com/19847933/66833260-32d37e00-ef64-11e9-9e65-79c5b573fe6b.png)

##### Basic Usage

```html
<rx-image image="https://getuikit.com/images/icon-clipboard.svg"></rx-image>
```


##### Advanced usage

Require `svg` files is done by `ParcelJS` only `typings.d.ts` needs to be defined for `linters` in order to work correct without throwing `Cannot find module './app.component.cdss'.`

```typescript
import { html, Component, LitElement } from '@rxdi/lit-html';
import glyph from '@rxdi/ui-kit/images/glyph.svg';

/**
 * @customElement image-view-component
 */
@Component({
  selector: 'image-view-component',
  template(this: ImageViewComponent) {
    return html`
      <rx-image image=${glyph} @onLoad=${this.onLoad}></rx-image>
      <rx-image image="https://graphql-server.com/assets/images/logo.png" @onLoad=${this.onLoad}></rx-image>
    `;
  }
})
export class ImageViewComponent extends LitElement {
  onLoad = (event: CustomEvent<HTMLImageElement>) => {
    console.log(event.target);
  }
}
```
