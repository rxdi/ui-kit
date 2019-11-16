import { Component, LitElement, html, styleMap } from '@rxdi/lit-html';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { navItems } from './nav.model';
import anime from 'animejs';

export const activeRoute = fromEvent(
  window,
  'vaadin-router-location-changed'
).pipe(map((event: CustomEvent) => event.detail.location.pathname));

/**
 * @customElement nav-component
 */
@Component({
  selector: 'nav-component',
  template(this: NavComponent) {
    return html`
      <style>
        /* width */
        .nav-wrapper::-webkit-scrollbar {
          width: 4px;
        }

        /* Track */
        .nav-wrapper::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        .nav-wrapper::-webkit-scrollbar-thumb {
          background: #888;
        }

        /* Handle on hover */
        .nav-wrapper::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      </style>
      <div
        class="nav-wrapper"
        style="position: fixed; height: 100%; overflow-y: auto; width: 250px; background: #1c1f24;display: grid"
      >
        <ul style="list-style: none; padding: 0; margin: 0;">
          <rx-animation .options=${this.listOptions}>
            <rx-for .of=${navItems}>
              <rx-let
                .item=${({ path, label }) => html`
                  <li style="opacity: 0" class="list-item">
                    <a style="text-decoration: none" href="${path}">
                      <rx-monad>
                        <rx-state .value=${activeRoute}></rx-state>
                        <rx-render
                          .state=${state => html`
                            <rx-button
                              style=${styleMap({
                                display: 'block',
                                borderBottom: '1px solid #99999969',
                                backgroundColor:
                                  state === path
                                    ? 'var(--primary-hover-color)'
                                    : ''
                              })}
                              palette="primary"
                            >
                              ${label}
                            </rx-button>
                          `}
                        ></rx-render>
                      </rx-monad>
                    </a>
                  </li>
                `}
              ></rx-let>
            </rx-for>
          </rx-animation>
        </ul>
      </div>
    `;
  }
})
export class NavComponent extends LitElement {
  private listOptions = ({ stagger }) => ({
    delay: stagger(20),
    opacity: 1,
    duration: 3000
  });
}
