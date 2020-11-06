import {
  html,
  Component,
  LitElement,
  css,
  property,
  TemplateResult,
  classMap,
} from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

export interface Tab {
  name: string | TemplateResult;
  view: TemplateResult | string;
  active?: boolean;
  lastElement?: boolean;
  settingsElement?: boolean;
}

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
      user-select: none;
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
          (tab, index) => html`
            ${tab.settingsElement
              ? html`<span style="flex: 1 3 auto;"></span>`
              : html``}
            <li class=${classMap({ active: tab.active })}>
              <a
                @click=${() => {
                  if (!tab.lastElement) {
                    this.pages = this.pages.map((p) => {
                      p.active = false;
                      return p;
                    });
                    tab.active = true;
                    this.pages = [...this.pages];
                    if (this.changeLocation) {
                      const newLocation = window.location.pathname.substring(
                        0,
                        window.location.pathname.lastIndexOf('/') + 1
                      );
                      window.history.pushState(
                        {},
                        null,
                        `${newLocation}${index}`
                      );
                    }
                  }

                  this.dispatchEvent(
                    new CustomEvent('change', { detail: { tab, index } })
                  );
                }}
                >${tab.name}</a
              >
            </li>
          `
        )}
      </ul>

      <ul class="switcher">
        ${this.pages
          .filter((a) => a.active)
          .map((v) => html` <li>${v.view}</li> `)}
      </ul>
    `;
  },
})
export class TabsComponent extends LitElement {
  @property({ type: String })
  public palette: PalettesUnion = 'default';

  @property({ type: Boolean })
  public changeLocation = true;

  @property({ type: Array })
  pages: Tab[] = [];
}
