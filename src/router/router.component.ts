import { Component, LitElement, html, property } from '@rxdi/lit-html';
import { Router, Route } from '@rxdi/router'
import { of, Observable } from 'rxjs';

/**
 * @customElement router-outlet2
 */
@Component({
  selector: 'router-outlet2',
  template(this: RouterOutlet) {
    return html`
    <rx-monad>
      <rx-state .value=${this.routes}></rx-state>
      <rx-render .state=${state => of(html`
        ${state[0].path}
      `)}></rx-render>
    </rx-monad>
  `
  }
})
export class RouterOutlet extends LitElement {
  @property() public routes: Route[] | Observable<Route[]> = of<Route[]>([
    {
      path: '/ui-kit/button',
      component: 'test-component'
    }
  ]);
}
