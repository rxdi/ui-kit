import { Component, html, LitElement } from '@rxdi/lit-html';
import { notification } from './dropdown.svg';

@Component({
  selector: 'dropdown-view',
  template(this: DropDownViewComponent) {
    return html`
      <rx-dropdown
        style="margin-right: 5px;"
        .menuItems=${[
          html`
            <a href="#" class="item">You need to setup your SSL certificate!</a>
          `,
          html`
            <a href="#" class="item">You need to setup your SSL certificate!</a>
          `,
          html`
            <a href="#" class="item">You need to setup your SSL certificate!</a>
          `
        ]}
      >
        <div style="margin-right: 10px;margin-top: 3px;">
          ${notification}
        </div>
      </rx-dropdown>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/dropdown/README.md"
      ></markdown-reader>
    `;
  }
})
export class DropDownViewComponent extends LitElement {}
