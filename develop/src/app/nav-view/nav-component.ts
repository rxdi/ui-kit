import { Component, LitElement, html, styleMap } from '@rxdi/lit-html';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { navItems } from './nav.model';

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
      <div
        style="position: fixed; height: 100%; overflow-y: auto; width: 250px; background: #1c1f24;display: grid"
      >
        <ul style="list-style: none; padding: 0; margin: 0;">
          <rx-for .of=${navItems}>
            <rx-let
              .item=${({ path, label }) => html`
                <li class="list-item">
                  <a style="text-decoration: none" href="${path}">
                    <rx-monad>
                      <rx-state .value=${activeRoute}></rx-state>
                      <rx-render
                        .state=${state => html`
                          <rx-button
                            style=${styleMap({
                              display: 'block',
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
        </ul>
      </div>
    `;
  }
})
export class NavComponent extends LitElement {}
