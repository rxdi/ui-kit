import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { Nav } from '../../../../src/nav';
/**
 * @customElement nav-component
 */
@Component({
  selector: 'nav-component',
  template(this: NavComponent) {
    return html`
      <style>
        rx-button {
          width: 200px;
        }
      </style>
      <div style="top:0px;background: #1c1f24;display: grid">
        <a href="/ui-kit/"><rx-button palette="primary">Markdown Link</rx-button> </a>
        <a href="/ui-kit/markdown-reader/rxdi/ui-components/README.md"
          ><rx-button palette="primary">Markdown Route Params</rx-button>
        </a>
        <a href="/ui-kit/responsive"
          ><rx-button palette="primary">Responsive Service</rx-button>
        </a>
        <a href="/ui-kit/accordion"
          ><rx-button palette="primary">Accordion</rx-button>
        </a>
        <a href="/ui-kit/image"><rx-button palette="primary">Image</rx-button> </a>
        <a href="/ui-kit/badge"><rx-button palette="primary">Badge</rx-button> </a>
        <a href="/ui-kit/modal"><rx-button palette="primary">Modal</rx-button> </a>
        <a href="/ui-kit/button"><rx-button palette="primary">Button</rx-button> </a>
        <a href="/ui-kit/article"><rx-button palette="primary">Article</rx-button> </a>
        <a href="/ui-kit/divider"><rx-button palette="primary">Divider</rx-button> </a>
        <a href="/ui-kit/label"><rx-button palette="primary">Label</rx-button> </a>
        <a href="/ui-kit/nav"><rx-button palette="primary">Nav</rx-button> </a>
        <a href="/ui-kit/dropdown"><rx-button palette="primary">Dropdown</rx-button> </a>
        <a href="/ui-kit/card"><rx-button palette="primary">Card</rx-button> </a>
        <a href="/ui-kit/forms"><rx-button palette="primary">Forms</rx-button> </a>
        <a href="/ui-kit/progress"><rx-button palette="primary">Progress</rx-button> </a>
        <a href="/ui-kit/alert"><rx-button palette="primary">Alert</rx-button> </a>
        <a href="/ui-kit/description"><rx-button palette="primary">Description List</rx-button> </a>
        <a href="/ui-kit/dotnav"><rx-button palette="primary">Dotnav</rx-button> </a>
        <a href="/ui-kit/loading"><rx-button palette="primary">Loading</rx-button> </a>
        <a href="/ui-kit/spinner"><rx-button palette="primary">Spinner</rx-button> </a>
        <a href="/ui-kit/tabs"><rx-button palette="primary">Tabs</rx-button> </a>
        <a href="/ui-kit/table"><rx-button palette="primary">Table</rx-button> </a>
        <a href="/ui-kit/draggable"><rx-button palette="primary">Draggable</rx-button> </a>
        <a href="/ui-kit/introspect"><rx-button palette="primary">Introspect</rx-button> </a>
        <a href="/ui-kit/pwa"><rx-button palette="primary">PWA</rx-button> </a>
        <a href="/ui-kit/graph"><rx-button palette="primary">Graph</rx-button> </a>
        <a href="/ui-kit/animation"><rx-button palette="primary">Animation</rx-button> </a>
        <a href="/ui-kit/operators"><rx-button palette="primary">Operators</rx-button> </a>

        <!-- <rx-button
          palette="danger"
          @click=${() =>
            this.nav.setStylesSubject(css`
              :host {
                position: absolute;
              }
            `)}
          >Absolute</rx-button
        >

        <rx-button
          palette="danger"
          @click=${() =>
            this.nav.setStylesSubject(css`
              :host {
                position: relative;
              }
            `)}
          >Relative</rx-button
        > -->
      </div>
    `;
  }
})
export class NavComponent extends LitElement {
  @Inject(Nav) private nav: Nav;
}
