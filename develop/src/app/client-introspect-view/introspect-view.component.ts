import {
  Component,
  html,
  LitElement,
  css,
  property,
  TemplateResult,
  unsafeHTML,
  classMap
} from '@rxdi/lit-html';
import { Router, Route } from '@rxdi/router';

@Component({
  selector: 'introspect-view-component',

  template(this: IntrospectViewComponent) {
    return html`
      <rx-grid
        .$items=${this.router ? this.router.getRoutes() : []}
        .template=${(r: Route) => {
          if (r.path === '/ui-kit/introspect') {
            return html``;
          }
          return html`
            <style>
              .wrap {
                width: 320px;
                height: 192px;
                padding: 0;
                overflow: hidden;
              }
              .hidden {
                display: none;
              }

              .visible {
                display: flex;
              }
              .frame {
                width: 1280px;
                height: 786px;
                border: 0;

                -ms-transform: scale(0.25);
                -moz-transform: scale(0.25);
                -o-transform: scale(0.25);
                -webkit-transform: scale(0.25);
                transform: scale(0.25);

                -ms-transform-origin: 0 0;
                -moz-transform-origin: 0 0;
                -o-transform-origin: 0 0;
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
              }
            </style>

            <div class=${classMap({ wrap: true })}>
              <rx-button
                palette="danger"
                @click=${() => {
                  const iframe = document.createElement('iframe');
                  iframe.scrolling = 'no';
                  iframe.setAttribute('src', r.path);
                  iframe.setAttribute('class', 'frame');
                  const container = this.shadowRoot
                    .querySelector('rx-grid')
                    .shadowRoot.getElementById(r.path);
                  if (container.childNodes.length) {
                    container.removeChild(container.childNodes[0]);
                  }
                  container.appendChild(iframe);
                  this.show[r.path] = !this.show[r.path];
                  this.show = Object.assign({}, this.show);
                }}
              >
                ${r.path}
              </rx-button>
              <div
                id=${r.path}
                class="${classMap({ hidden: !this.show[r.path] })}"
              ></div>
            </div>
          `;
        }}
      ></rx-grid>
    `;
  }
})
export class IntrospectViewComponent extends LitElement {
  @Router() private router: Router;

  @property()
  show = {};
}
