
# Responsive Service

#### Usage on Client side with @rxdi/lit-html

```typescript
import { Module } from '@rxdi/core';
import { ResponsiveService } from '@rxdi/ui-components/services';

@Module({
  providers: [ResponsiveService]
})
export class CoreModule {}

```


##### Using it inside component

> Remember to always unsubscribe from observables!

```typescript
import { html, LitElement, Component, css, property } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { ResponsiveService } from '@rxdi/ui-components/services';
import { Subscription } from 'rxjs';

/**
 * @customElement navbar-component
 */
@Component({
  selector: 'navbar-component',
  style: css``,
  template(this: NavbarComponent) {
      return html``;
  }
})
export class NavbarComponent extends LitElement {
  @Inject(ResponsiveService) private responsive: ResponsiveService;
  @property() widthHeight: { width: number; height: number };

  private subscription: Subscription = this.responsive
    .combineBoth()
    .subscribe(v => (this.widthHeight = v));

  OnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
```
