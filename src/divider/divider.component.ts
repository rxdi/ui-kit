import {
  unsafeCSS,
  Component,
  LitElement,
  html,
  css,
  property
} from '@rxdi/lit-html';
import { style } from './style';
/**
 * @customElement rx-divider
 */
@Component({
  selector: 'rx-divider',
  style,
  template(this: DividerComponent) {
    if (this.type === 'icon') {
      return html`
        <hr class="icon" />
      `;
    }

    return html`
      <hr class="default" />
    `;
  }
})
export class DividerComponent extends LitElement {
  @property({ type: String }) type: 'default' | 'icon' = 'default';
}
