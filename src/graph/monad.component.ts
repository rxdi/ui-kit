import { LitElement, Component, html, property } from '@rxdi/lit-html';
import { FetchComponent } from './fetch.component';
import { RenderComponent } from './render.component';
import { StateComponent } from './state.component';
import { GraphOptions } from './types';
import { SettingsComponent } from './options.component';
import { createUniqueHash } from '@rxdi/core';

/**
 * @customElement rx-monad
 */
@Component({
  selector: 'rx-monad',
  template(this: MonadComponent) {
    return html`
      <slot></slot>
      ${this.options
        ? html`
            <rx-graph .options=${this.options}></rx-graph>
          `
        : ''}
    `;
  }
})
export class MonadComponent extends LitElement {
  private nodes: Node[] = [];

  @property({ type: Object })
  private options: GraphOptions;

  OnUpdateFirst() {
    const slot = this.shadowRoot.querySelector('slot');
    this.nodes = slot.assignedNodes();
    const renderComponent = this.findNode('rx-render') as RenderComponent;
    const fetchComponent = this.findNode('rx-fetch') as FetchComponent;
    const stateComponent = this.findNode('rx-state') as StateComponent;
    const settingsComponent = this.findNode('rx-settings') as SettingsComponent;
    let fetch: string;
    if (fetchComponent.query) {
      fetch = this.trim(fetchComponent.query, 'query');
    }
    if (fetchComponent.subscribe) {
      fetch = this.trim(fetchComponent.subscribe, 'subscription');
    }
    if (fetchComponent.mutate) {
      fetch = this.trim(fetchComponent.mutate, 'mutation');
    }
    this.options = {
      settings: settingsComponent.value,
      state: stateComponent.value,
      fetch,
      render: renderComponent.state
    };
    settingsComponent.remove();
    stateComponent.remove();
    renderComponent.remove();
    fetchComponent.remove();
  }

  private trim(query = '', type: 'query' | 'mutation' | 'subscription') {
    if (query.includes(type)) {
      return query;
    }
    const trimmedQuery = query.trim().replace(/\s/g, '');
    return `${type} ${trimmedQuery}`;
  }

  findNode(localName: string) {
    const node = this.nodes.find(
      n =>
        n &&
        n.nextSibling &&
        (n.nextSibling as HTMLElement).localName === localName
    );
    if (node) {
      return node.nextSibling;
    }
    return { value: null };
  }
}
