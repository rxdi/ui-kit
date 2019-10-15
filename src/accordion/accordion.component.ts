import {
  html,
  Component,
  LitElement,
  property,
  classMap
} from '@rxdi/lit-html';
import { style } from '@rxdi/ui-kit/accordion/style';
import { AccordionItem } from './model';

/**
 * @customElement rx-accordion
 */
@Component({
  selector: 'rx-accordion',
  styles: [style],
  template(this: AccordionComponent) {
    return html`
      <div class="container">
        ${Object.entries(this.items).map(
          ([key, i]) => html`
            <div class="item">
              <span
                @click=${() => this.itemClicked(key)}
                class=${classMap({
                  pointer: true,
                  userSelect: true,
                  title: true,
                  collapsed: i.collapsed
                })}
                >${i.title}</span
              >
              ${i.collapsed
                ? html`
                    <span class="content">
                      ${i.content}
                    </span>
                  `
                : ''}
            </div>
          `
        )}
      </div>
    `;
  }
})
export class AccordionComponent extends LitElement {
  @property({ type: Object })
  public items: { [key: string]: AccordionItem } = {};

  @property({ type: Boolean })
  public multiple: boolean;

  private itemClicked(key: string) {
    this.items[key].collapsed = !this.items[key].collapsed;
    if (!this.multiple) {
      this.collapse(key);
    }
    this.items = Object.assign({}, this.items);
    this.dispatchEvent(
      new CustomEvent('itemClicked', { detail: this.items[key] })
    );
  }

  private collapse(key: string = '') {
    Object.keys(this.items).forEach(i => {
      if (i !== key) {
        this.items[i].collapsed = false;
      }
    });
  }
}
