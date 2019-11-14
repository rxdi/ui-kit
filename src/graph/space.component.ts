import { LitElement, Component, html } from '@rxdi/lit-html';
import { FetchComponent } from './fetch.component';
import { RenderComponent } from './render.component';

@Component({
  selector: 'rx-space',
  template: () =>
    html`
      <slot></slot>
    `
})
export class SpaceComponent extends LitElement {
  OnUpdateFirst() {
    const fetchNode = this.shadowRoot.querySelector('slot').assignedNodes()[0];
    const renderNode = this.shadowRoot.querySelector('slot').assignedNodes()[2];

    if (fetchNode) {
      const fetchComponent = fetchNode.nextSibling as FetchComponent;
      console.log(fetchComponent);
    }

    if (renderNode) {
      const renderComponent = renderNode.nextSibling as RenderComponent;
      console.log(renderComponent);
    }
  }
}
