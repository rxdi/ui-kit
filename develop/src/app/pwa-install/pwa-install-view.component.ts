import { LitElement, Component, html, property } from '@rxdi/lit-html';
import { GlobalMenuService } from '../../../../src/global-menu/global-menu.service';
import { Inject } from '@rxdi/core';

@Component({
  selector: 'pwa-install-view-component',
  template(this: PwaInstallViewComponent) {
    return html`
      <rx-pwa-install
        .explainer=${`Simple app`}
        .showopen=${true}
        .manifestdata=${this.webmanifestData}
      ></rx-pwa-install>
      <rx-button
        palette="danger"
        @click=${() =>
          this.menu.open(
            html`<div style="padding: 30px; color: black">dada</div>`
          )}
        >Open Menu</rx-button
      >
    `;
  },
})
export class PwaInstallViewComponent extends LitElement {
  private webmanifest = 'manifest.webmanifest';

  @Inject(GlobalMenuService) private menu: GlobalMenuService;

  @property()
  private webmanifestData: {
    background_color: string;
    display: 'standalone';
    icons: { sizes: string; type: string; src: string }[];
    name: string;
    short_name: string;
    start_url: string;
    theme_color: string;
  };
  async OnInit() {
    if (process.env.NODE_ENV !== 'development') {
      this.webmanifest = 'ui-kit/manifest.webmanifest';
    }
    this.webmanifestData = await (await fetch(this.webmanifest)).json();

    this.webmanifestData.icons = this.webmanifestData.icons.map((icon) => {
      if (process.env.NODE_ENV !== 'development') {
        icon.src = `/ui-kit/${icon.src.substring(
          icon.src.lastIndexOf('/') + 1
        )}`;
      } else {
        icon.src = `/${icon.src.substring(icon.src.lastIndexOf('/') + 1)}`;
      }
      return icon;
    });
  }
}
