import {
  Component,
  LitElement,
  html,

} from '@rxdi/lit-html';
import '@rxdi/router/slot';
import { IRoute } from '@rxdi/router/slot';
import { DocItem } from './docs.component';
import './docs.component';

@Component({
  selector: 'docs-view-component',
  template(this: DocsViewComponent) {
    return html`
      <rx-docs .items=${this.items} .slots=${this.slots}></rx-docs>
    `;
  }
})
export class DocsViewComponent extends LitElement {
  slots = [
    {
      path: '/ui-kit/docs/home',
      component: async () =>
        (await import('../alert-view/alert-view.component'))
          .AlertViewComponent
    },
    {
      path: '/ui-kit/docs/about',
      component: async () =>
        (await import('../badge-view/badge-vew.component'))
          .BadgeViewComponent
    },
    {
      path: '/ui-kit/docs/loading',
      component: async () =>
        (await import('../loading-view/loading-view.component'))
          .LoadingViewComponent
    },
    {
      path: '**',
      redirectTo: '/ui-kit/docs/home'
    }
  ] as IRoute[];
  items: DocItem[] = [
    {
      title: 'Introduction',
      active: false,
      disabled: true,
      path: '/documentation/introduction'
    },
    {
      title: 'Overview',
      active: false,
      children: [{ title: 'History', path: '/ui-kit/docs/home' }]
    },
    {
      title: 'Fundamentals',
      active: true,
      children: [{ title: 'First steps', path: '/ui-kit/docs/about' }]
    },
    {
      title: 'Techniques',
      active: false,
      children: [{ title: `Dont's and do's`, path: '/ui-kit/docs/loading' }]
    },
    {
      title: 'Websockets',
      active: false,
      children: [{ title: 'Using Subscriptions', path: '/documentation/first-steps' }]
    },
    {
      title: 'Microservices',
      active: false,
      children: [{ title: 'Setup Microservice', path: '/documentation/first-steps' }]
    },
    {
      title: 'Application Context',
      active: false,
      children: [{ title: 'First steps', path: '/documentation/first-steps' }]
    },
    {
      title: 'Recipes',
      active: false,
      children: [{ title: 'Neo4J + Graphql', path: '/documentation/first-steps' }]
    },
    {
      title: 'CLI',
      active: false,
      children: [{ title: 'Bootstrap application', path: '/documentation/first-steps' }]
    },
    {
      title: 'FAQ',
      active: false,
      children: [{ title: 'And so on', path: '/documentation/first-steps' }]
    },
  ];
}
