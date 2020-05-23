
# Docs toc Component

##### Usage

```typescript
import { DocsComponent } from '@rxdi/ui-kit/docs';

@Module({
  components: [DocsComponent],
})
export class AppModule {}
```

Without module encapsulation

```typescript
import '@rxdi/ui-kit/docs';
```

```html
<rx-docs .items=${items} .slots=${slots}></rx-docs>
```

```ts
import { IRoute } from '@rxdi/router/slot';

@Component({
  selector: 'home-component',
  template(this: HomeComponent) {
    return html`
      Home
    `;
  }
})
export class HomeComponent extends LitElement {}

@Component({
  selector: 'about-component',
  template(this: AboutComponent) {
    return html`
      About
    `;
  }
})
export class AboutComponent extends LitElement {}

  const slots = [
    {
      path: '/home',
      component: HomeComponent
    },
    {
      path: '/about',
      component: async () => AboutComponent
    },
    // {
    //   path: '/my-component',
    //   component: async () => (await import('./my-component.ts')).MyComponent
    // },
    {
      path: '**',
      redirectTo: '/home'
    }
  ] as IRoute[];
  const items: DocItem[] = [
    {
      title: 'Introduction',
      active: false,
      disabled: true,
      path: '/home'
    },
    {
      title: 'Overview',
      active: false,
      children: [{ title: 'History', path: '/home' }]
    },
    {
      title: 'Fundamentals',
      active: true,
      children: [{ title: 'First steps', path: '/about' }]
    },
    {
      title: 'Techniques',
      active: false,
      children: [{ title: `Dont's and do's`, path: '/about' }]
    },
    {
      title: 'Websockets',
      active: false,
      children: [{ title: 'Using Subscriptions', path: '/about' }]
    },
    {
      title: 'Microservices',
      active: false,
      children: [{ title: 'Setup Microservice', path: '/about' }]
    },
    {
      title: 'Application Context',
      active: false,
      children: [{ title: 'First steps', path: '/about' }]
    },
    {
      title: 'Recipes',
      active: false,
      children: [{ title: 'Neo4J + Graphql', path: '/about' }]
    },
    {
      title: 'CLI',
      active: false,
      children: [{ title: 'Bootstrap application', path: '/about' }]
    },
    {
      title: 'FAQ',
      active: false,
      children: [{ title: 'And so on', path: '/about' }]
    },
  ];
```
