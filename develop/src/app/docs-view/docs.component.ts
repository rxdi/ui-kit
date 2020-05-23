import {
  Component,
  LitElement,
  html,
  css,
  classMap,
  property
} from '@rxdi/lit-html';
import '@rxdi/router/slot';
import { IRoute } from '@rxdi/router/slot';

export interface DocItem {
  title: string;
  active?: boolean;
  path?: string;
  children?: DocItem[];
  disabled?: boolean;
}

interface ISubmenuState {
  item: DocItem;
  submenuHidden: boolean;
}
type ISubmenuSetState = (s: ISubmenuState) => void;
/**
 * @customElement rx-docs
 */
@Component({
  selector: 'rx-docs',
  style: css`
    .menu {
      padding: 20px 17px 40px 24px;
      width: 265px;
      background: #f5f5f5;
      bottom: 0;
      top: 0;
      z-index: 1000;
      overflow: hidden;
    }
  `,
  template(this: DocsComponent) {
    return html`
      <div style="display: flex">
        <div>
          <div class="menu">
            <rx-for .of=${this.items}>
              <rx-let
                .item=${(i: DocItem) => html`
                  <rx-monad>
                    <rx-state
                      .value=${{ item: i, submenuHidden: i.active }}
                    ></rx-state>
                    <rx-render
                      .state=${(
                        { item, submenuHidden }: ISubmenuState,
                        setState: ISubmenuSetState
                      ) => html`
                        <div
                          style="cursor: pointer;margin: 0 -10px;padding: 0 10px;"
                        >
                          <style>
                            h3 {
                              text-transform: uppercase;
                              text-decoration: none;
                              user-select: none;
                              font-weight: bold;
                              color: black;
                              font-size: 15px;
                              margin: 10px 0;
                              transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
                            }
                            .active,
                            :hover {
                              color: #37a5bc;
                            }
                            ul {
                              margin: 10px 0 15px -20px;
                            }
                          </style>
                          <h3
                            @click=${() =>
                              setState({ item, submenuHidden: !item.disabled ? !submenuHidden : false })}
                            class=${classMap({ active: submenuHidden })}
                          >
                            ${i.title}
                          </h3>
                          ${submenuHidden && !item.disabled
                            ? html`
                                <ul class=${classMap({ submenuHidden })}>
                                  <rx-animation
                                    overflow="hidden"
                                    .options=${this.options}
                                  >
                                    <rx-for .of=${item.children || []}>
                                      <rx-let
                                        .item=${children => html`
                                          <style>
                                            li a {
                                              color: #151515;
                                              font-size: 14px;
                                              text-decoration: none;
                                              cursor: pointer;
                                            }
                                            li a:hover {
                                              color: #37a5bc;
                                            }
                                          </style>
                                          <div
                                            style="transform: translateX(-100%) ;"
                                          >
                                            <li>
                                              <router-link
                                                path=${children.path}
                                              >
                                                <a
                                                  >${children.title}</a
                                                >
                                              </router-link>

                                            </li>
                                          </div>
                                        `}
                                      ></rx-let>
                                    </rx-for>
                                  </rx-animation>
                                </ul>
                              `
                            : ''}
                        </div>
                      `}
                    ></rx-render>
                  </rx-monad>
                `}
              ></rx-let>
            </rx-for>
          </div>
        </div>
        <div>
          <div>
            <router-slots .slots=${this.slots}
            ></router-slots>
          </div>
        </div>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/docs/README.md"
      ></markdown-reader>
    `;
  }
})
export class DocsComponent extends LitElement {
  @property({ type: Array })
  slots: IRoute[] = [];

  @property({ type: Array })
  items: DocItem[] = [];
  private options = () => ({
    duration: 200,
    translateX: 0,
    easing: 'easeInOutSine'
  });
}
