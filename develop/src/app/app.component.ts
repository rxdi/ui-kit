import { html, Component, css,  LitElement } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { Nav } from '../../../src/nav';

/**
 * @customElement app-component
 */
@Component({
  selector: 'app-component',
  template(this: AppComponent) {
    return html`
      <div style="display: flex">
        <div class="rx-nav" id="rx-nav"></div>
        <div class="test" style="width: calc(100% - 250px); margin-left: 250px">
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
       dada
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
