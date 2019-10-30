import { TabsComponent } from './tabs.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-tabs': TabsComponent;
  }
}

export * from './tabs.component';
