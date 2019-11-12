import { LitElement, Component, html } from '@rxdi/lit-html';

@Component({
  selector: 'pwa-install-view-component',
  template(this: PwaInstallViewComponent) {
    return html`
      <rx-pwa-install
        .explainer=${`Simple app`}
        .showopen=${true}
        .manifestdata=${this.webmanifestData}
      ></rx-pwa-install>

    `;
  }
})
export class PwaInstallViewComponent extends LitElement {
  private webmanifest = 'manifest.webmanifest';
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
    console.log(this.webmanifestData);
    this.webmanifestData.icons = this.webmanifestData.icons.map(icon => {
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
