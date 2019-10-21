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
        <a href="/"><rx-button palette="primary">Markdown Link</rx-button> </a>
        <a href="/markdown-reader/rxdi/ui-components/README.md"
          ><rx-button palette="primary">Markdown Route Params</rx-button>
        </a>
        <a href="/responsive"
          ><rx-button palette="primary">Responsive Service</rx-button>
        </a>
        <a href="/accordion"
          ><rx-button palette="primary">Accordion</rx-button>
        </a>
        <a href="/image"><rx-button palette="primary">Image</rx-button> </a>
        <a href="/badge"><rx-button palette="primary">Badge</rx-button> </a>
        <a href="/modal"><rx-button palette="primary">Modal</rx-button> </a>
        <a href="/button"><rx-button palette="primary">Button</rx-button> </a>
        <a href="/article"><rx-button palette="primary">Article</rx-button> </a>
        <a href="/divider"><rx-button palette="primary">Divider</rx-button> </a>
        <a href="/label"><rx-button palette="primary">Label</rx-button> </a>
        <a href="/nav"><rx-button palette="primary">Nav</rx-button> </a>
        <a href="/dropdown"><rx-button palette="primary">Dropdown</rx-button> </a>

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
