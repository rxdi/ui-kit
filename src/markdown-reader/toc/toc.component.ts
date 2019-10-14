import { LitElement, Component, html, property, async } from '@rxdi/lit-html';
import { style } from './toc.component.css';
import { Inject } from '@rxdi/core';
import { MarkdownParserMenuProvider } from '../markdown-menu.provider';
import { map, filter } from 'rxjs/operators';
import { TocInterface } from './toc.interface';

/**
 * @customElement toc-component
 */
@Component({
  selector: 'toc-component',
  style,
  template(this: TocComponent) {
    return html`
      <div class="toc-wrapper">
        <ul>
          ${async(this.menus)}
        </ul>
      </div>
    `;
  }
})
export class TocComponent extends LitElement {
  @property({ type: Boolean }) opened = true;

  @Inject(MarkdownParserMenuProvider)
  private menuProvider: MarkdownParserMenuProvider;

  private menus = this.menuProvider.menu.pipe(
    filter(() => !!this.opened),
    map(menus => this.createMenusTemplate(menus))
  );

  private clickAnchor(element: HTMLElement) {
    this.menuProvider.navigateToAnchor(element);
  }

  private createMenusTemplate(menus: TocInterface[]) {
    return html`
      ${menus.map(i => this.createSingleItem(i))}
    `;
  }

  private createSingleItem(item: TocInterface) {
    return html`
      <li @click=${() => this.clickAnchor(item.elementRef)}>
        ${item.title}
      </li>
    `;
  }
}
