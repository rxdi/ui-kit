import {
  html,
  Component,
  LitElement,
  css,
  property,
  TemplateResult,
  classMap
} from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

/**
 * @customElement rx-tabs
 */
@Component({
  selector: 'rx-tabs',
  style: css`
    .tabs {
      display: flex;
      flex-wrap: wrap;
      margin-left: -20px;
      padding: 0;
      list-style: none;
      position: relative;
    }
    .switcher {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .tabs > * {
      flex: none;
      padding-left: 20px;
      position: relative;
    }
    .tabs > .active > a {
      color: #222;
    }
    .tabs > * > a {
      display: block;
      text-align: center;
      padding: 9px 20px;
      color: #999;
      border-bottom: 2px solid transparent;
      font-size: 12px;
      text-transform: uppercase;
      transition: color 0.1s ease-in-out;
      line-height: 20px;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }
    a:hover {
      color: #333;
    }
    li {
      color: #666;
    }
  `,
  template(this: TabsComponent) {
    return html`
      <style>
        .tabs > .active > a {
          border-color: var(--${this.palette}-bg-color);
        }
      </style>
      <ul class="tabs">
        ${this.pages.map(
          v => html`
            <li class=${classMap({ active: v.active })}>
              <a
                @click=${() => {
                  this.pages = this.pages.map(p => {
                    p.active = false;
                    return p;
                  });
                  v.active = true;
                  this.pages = [...this.pages];
                }}
                >${v.name}</a
              >
            </li>
          `
        )}
      </ul>

      <ul class="switcher">
        ${this.pages
          .filter(a => a.active)
          .map(
            v => html`
              <li>
                ${v.view}
              </li>
            `
          )}
      </ul>
    `;
  }
})
export class TabsComponent extends LitElement {
  @property({ type: String })
  public palette: PalettesUnion = 'default';

  @property({ type: Array })
  pages: {
    name: string | TemplateResult;
    view: TemplateResult | string;
    active?: boolean;
  }[] = [];
}
