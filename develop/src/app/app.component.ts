import { html, Component, css, async, query, LitElement } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { Nav } from '../../../src/nav';
import { map } from 'rxjs/operators';

/**
 * @customElement app-component
 */
@Component({
  selector: 'app-component',
  template(this: AppComponent) {
    return html`
      <!-- ${async(
        this.navService.getOpenSubject().pipe(
          map(res => {
            if (res.left >= 0) {
              return html`
                <style>
                  .test {
                    margin-left: 500px;
                  }
                </style>
              `;
            }
            console.log('vlizam');
            return html`
              <style>
                .test {
                  margin-left: 0px;
                }
              </style>
            `;
          })
        )
      )} -->
      <style>
      /*  */
      </style>
      <div style="display: flex">
        <div class="rx-nav" id="rx-nav"></div>
        <div class="test" style="transition: margin-left .5s;width: 100%;">
          <div style="display: flex;     ">
            <rx-button
              palette="primary"
              @click=${() => this.openNav()}
              style="width: 100%; background-color: red"
            >
              OpenNav
            </rx-button>
            <rx-button
              palette="primary"
              @click=${() => this.closeNav()}
              style="width: 100%; background-color: red"
            >
              CloseNav
            </rx-button>
          </div>

          <router-outlet></router-outlet>
        </div>
      </div>
    `;
  },
  container: document.getElementById('app')
})
export class AppComponent extends LitElement {
  @Inject(Nav) private navService: Nav;
  OnInit() {
    this.openNav();
  }
  openNav() {
    if (this.navService.getNavRef()) {
      return;
    }
    this.navService.open({
      navOptions: { delay: 0, left: 0 },
      template: html`
        <nav-component></nav-component>
      `,
      styles: css`
        :host {
          position: relative;
          top: 0;
          /* transition: left 0.3s ease-out; */
          bottom: 0;
          left: -270px;
          box-sizing: border-box;
          background: #fff;
          overflow-y: auto;
        }
      `,
      ref: document.getElementById('rx-nav')
    });
  }

  closeNav() {
    this.navService.close();
  }
}
