
# Image Component

Pull request: https://github.com/rxdi/ui-kit/pull/4

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
