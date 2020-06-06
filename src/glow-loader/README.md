
# Glow loader Component

##### Usage

```html
<rx-glow-loader></rx-glow-loader>
```

##### Example

```typescript
import { html, Component, LitElement, css } from '@rxdi/lit-html';

import '@rxdi/ui-kit/glow-loader';

/**
 * @customElement glow-loader-view-component
 */
@Component({
  selector: 'glow-loader-view-component',
  template(this: BadgeViewComponent) {
    return html`
      <rx-glow-loader></rx-glow-loader>
    `;
  }
})
export class BadgeViewComponent extends LitElement {}
```


