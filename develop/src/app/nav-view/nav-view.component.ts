import { LitElement, Component, html, css } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { NavService } from '../../../../src/nav';

@Component({
  selector: 'nav-view-component',
  style: css`
    .container {
      width: 300px;
      margin: 0 auto;
    }
  `,
  template(this: NavViewComponent) {
    return html`
      <div class="container">
        <rx-button @click=${() => this.openNavigation()} palette="primary"
          >Open</rx-button
        >

        <rx-button @click=${() => this.closeNavigation()} palette="primary"
          >Close</rx-button
        >
      </div>
    `;
  }
})
export class NavViewComponent extends LitElement {
  @Inject(NavService)
  private nav: NavService;

  openNavigation() {
    this.nav.open({
      template: html`
        <div>
          <h1>daadad</h1>
        </div>
      `,
      styles: css`
        h1 {
          color: black;
        }
        :host {
          position: absolute;
          top: 0;
          transition: left 0.3s ease-out;
          bottom: 0;
          left: -270px;
          box-sizing: border-box;
          min-width: 270px;
          background: #fff;
          overflow-y: auto;
        }
      `
    });
  }
  closeNavigation() {
    this.nav.close();
  }
}
