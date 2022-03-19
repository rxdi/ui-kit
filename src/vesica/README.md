##### Usage

```typescript
import { VesicaComponent } from '@rxdi/ui-kit/vesica';

@Module({
  components: [VesicaComponent],
})
export class AppModule {}
```

##### Creating component container with change template button

```typescript
import { Component, html, LitElement, query, render } from '@rxdi/lit-html';

import '@rxdi/button';

@Component({
  selector: 'vesica-container',
  template(this: VesicaComponent) {
    return html`
      <div id="vesica"></div>
      <rx-button @click=${() => this.changeTemplate()}
        >Change Template</rx-button
      >
    `;
  },
})
export class VesicaComponent extends LitElement {
  @query('#vesica')
  private vesica: HTMLElement;

  private element: HTMLElement;

  changeTemplate() {
    if (this.element) {
      this.element.remove();
    }
    this.element = document.createElement('div');
    render(html`<rx-vesica></rx-vesica>`, this.element);
    this.vesica.appendChild(this.element);
  }
}
```
