import { Component, LitElement, html } from '@rxdi/lit-html';
import { of } from 'rxjs';

@Component({
  selector: 'route-view-component',
  template(this: RouterViewComponent) {
    return html`
      <router-outlet2
        .routes=${[{ path: '/test', component: 'rx-button' }]}
      ></router-outlet2>
    `;
  }
})
export class RouterViewComponent extends LitElement {}
