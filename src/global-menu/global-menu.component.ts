import {
  LitElement,
  html,
  property,
  Component,
  async,
  TemplateResult,
} from '@rxdi/lit-html';
import { style } from './global-menu.component.css';
import { Inject } from '@rxdi/core';
import { GlobalMenuService } from './global-menu.service';
/**
 * @customElement global-menu
 */
@Component({
  selector: 'global-menu',
  style,
  template(this: GlobalMenuComponent) {
    return html`
      <div id="background" @click="${() => this.cancel()}"></div>
      <button id="closeButton" @click="${() => this.cancel()}">
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.33"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z"
            fill="#60656D"
          />
        </svg>
      </button>
      <div id="installModal">
        ${this.template ? this.template : html`<slot></slot>`}
        <div id="buttonsContainer">
          <button @click="${() => this.cancel()}" id="installButton">
            Close
          </button>
        </div>
      </div>
    `;
  },
})
export class GlobalMenuComponent extends LitElement {
  @property({ type: Object }) template: TemplateResult;

  @Inject(GlobalMenuService)
  private menu: GlobalMenuService;

  async OnUpdateFirst(): Promise<void> {
    document.onkeyup = (e) => {
      if (e.key === 'Escape') {
        this.cancel();
      }
    };
  }

  open(template: TemplateResult) {
    this.template = template;
    this.menu.setOpenSubject(true)
  }

  cancel() {
    this.remove();
    this.menu.setOpenSubject(false)
  }
}
