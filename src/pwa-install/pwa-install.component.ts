import { LitElement, html, property, Component, css } from '@rxdi/lit-html';
import 'infinite-carousel-wc';
import { style } from './pwa-install.component.css';
import '../global-menu/global-menu.component';
/**
 * @customElement rx-pwa-install
 */
@Component({
  selector: 'rx-pwa-install',
  style,
  template(this: PwaInstallComponent) {
    return html`
      ${this.showopen
        ? html`
            <button id="openButton" @click="${() => this.openPrompt()}">
              <slot>
                Install
              </slot>
            </button>
          `
        : null}
      ${this.openmodal
        ? html`
            <div id="background" @click="${() => this.cancel()}"></div>
          `
        : null}
      ${this.openmodal
        ? html`
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
          `
        : null}
      ${this.openmodal && this.manifestdata
        ? html`
            <div id="installModal">
              <div id="headerContainer">
                <img
                  src="${this.iconpath
                    ? this.iconpath
                    : this.manifestdata.icons[0].src}"
                />
                <div>
                  <h1>${this.manifestdata.name}</h1>
                  <p id="desc">
                    ${this.explainer}
                  </p>
                </div>
              </div>
              <div id="contentContainer">
                <div id="featuresScreenDiv">
                  ${this.manifestdata.features
                    ? html`
                        <div id="keyFeatures">
                          <h3>Key Features</h3>
                          <ul>
                            ${this.manifestdata.features
                              ? this.manifestdata.features.map(feature => {
                                  return html`
                                    <li>${feature}</li>
                                  `;
                                })
                              : null}
                          </ul>
                        </div>
                      `
                    : null}
                  ${this.manifestdata.screenshots
                    ? html`
                        <div id="screenshotsContainer">
                          <div id="screenshots">
                            <infinite-carousel-wc>
                              ${this.manifestdata.screenshots.map(
                                (screen, index) => {
                                  return html`
                                    <div slot="${index + 1}">
                                      <img src="${screen.src}" />
                                    </div>
                                  `;
                                }
                              )}
                            </infinite-carousel-wc>
                          </div>
                        </div>
                      `
                    : null}
                </div>
                <div>
                  <h3>App Description</h3>
                  <p>${this.manifestdata.description}</p>
                </div>
              </div>
              <div id="buttonsContainer">
                ${this.deferredprompt
                  ? html`
                      <button
                        id="installButton"
                        @click="${() => this.install()}"
                      >
                        Install ${this.manifestdata.short_name}
                      </button>
                    `
                  : html`
                      <button
                        @click="${() => this.cancel()}"
                        id="installButton"
                      >
                        Close
                      </button>
                    `}
              </div>
            </div>
          `
        : null}
    `;
  }
})
export class PwaInstallComponent extends LitElement {
  @property() deferredprompt: any;
  @property() manifestpath = '';
  @property() iconpath: string;
  @property() manifestdata: any;
  @property({ type: Boolean }) openmodal: boolean;
  @property({ type: Boolean }) showopen: boolean;
  @property()
  explainer = ``;

  async OnUpdate(): Promise<void> {
    await this.getManifestData();

    window.addEventListener('beforeinstallprompt', e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredprompt = e;
    });

    document.onkeyup = e => {
      if (e.key === 'Escape') {
        this.cancel();
      }
    };
  }

  async getManifestData() {
    if (this.manifestdata) {
      this.updateButtonColor(this.manifestdata);
      return;
    }
    if (this.manifestpath) {
      const response = await fetch(this.manifestpath);
      const data = await response.json();
      this.manifestdata = data;
    }
  }

  updateButtonColor(data) {
    if (data.theme_color) {
      this.style.setProperty('--install-button-color', data.theme_color);
    }
  }

  openPrompt() {
    this.openmodal = true;
  }

  public async install(): Promise<boolean> {
    if (this.deferredprompt) {
      this.deferredprompt.prompt();

      const choiceResult = await this.deferredprompt.userChoice;

      if (choiceResult.outcome === 'accepted') {
        console.log('Your PWA has been installed');
        return true;
      } else {
        console.log('User chose to not install your PWA');
        return false;
      }
    } else {
      // handle else case
    }
  }

  cancel() {
    this.openmodal = false;

    if (this.hasAttribute('openmodal')) {
      this.removeAttribute('openmodal');
    }
  }
}
