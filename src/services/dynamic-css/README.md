# Dynamic CSS loader

##### Usage

```typescript
import { html, Component, LitElement, css } from '@rxdi/lit-html';
import { DynamicCssService } from '@rxdi/ui-kit/services/dynamic-css/dynamic-css';
import { Inject } from '@rxdi/core';

import { DEFAULT } from '@rxdi/ui-kit/styles/chunks/palettes/default';
import { PRIMARY } from '@rxdi/ui-kit/styles/chunks/palettes/primary';
import { SECONDARY } from '@rxdi/ui-kit/styles/chunks/palettes/secondary';

/**
 * @customElement change-theme-component
 */
@Component({
  selector: 'change-theme-component',
  template(this: ChangeThemeComponent) {
    return html`
      <button @click=${() => this.changeTheme('mine')}>Change My theme</button>
      <button @click=${() => this.changeTheme('yours')}>
        Change Yours theme
      </button>
    `;
  }
})
export class ChangeThemeComponent extends LitElement {
  @Inject(DynamicCssService) private dynamicCss: DynamicCssService;

  changeTheme(theme: 'mine' | 'yours') {
    if (theme === 'yours') {
      this.dynamicCss.changeStyle({
        default: css``,
        primary: css``,
        secondary: css``
      });
    }
    if (theme === 'mine') {
      this.dynamicCss.changeStyle({
        default: DEFAULT,
        primary: PRIMARY,
        secondary: SECONDARY
      });
    }
  }
}
```
