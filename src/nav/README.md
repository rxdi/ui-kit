# Nav off canvas

Pull request https://github.com/rxdi/ui-kit/pull/18

##### Usage

```typescript
import { NavModule } from '@rxdi/ui-kit/nav';

@Module({
  imports: [NavModule.forRoot()]
})
export class AppModule {}
```


```typescript
import { LitElement, Component, html, css } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { Nav } from '@rxdi/ui-kit/nav';

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
  @Inject(Nav) private nav: Nav;

  openNavigation() {
    this.nav.open({
      navOptions: {
        left: 0,
        delay: 0
      },
      template: html`
        <div>
          <p>daadad</p>
        </div>
      `,
      styles: css`
        p {
          color: black;
        }
        :host {
          position: absolute;
          top: 0;
          transition: left 0.3s ease-out;
          bottom: 0;
          left: -300px;
          box-sizing: border-box;
          min-width: 300px;
          background: #fff;
          overflow-y: auto;
        }
      `
    });
  }
  closeNavigation() {
    this.nav.close({ delay: 300, left: -300 });
  }
}

```