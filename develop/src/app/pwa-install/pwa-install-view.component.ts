import { LitElement, Component, html } from '@rxdi/lit-html';

@Component({
  selector: 'pwa-install-view-component',
  template(this: PwaInstallViewComponent) {
    return html`
      <rx-pwa-install
        .explainer=${`Simple app
      `}
        .showopen=${true}
        .manifestpath=${this.webmanifest}
      ></rx-pwa-install>
    `;
  }
})
export class PwaInstallViewComponent extends LitElement {
  private webmanifest = 'manifest.webmanifest';
  OnInit() {
    if (process.env.NODE_ENV !== 'development') {
      this.webmanifest = 'ui-kit/manifest.webmanifest';
    }
  }
}
