import { DividerComponent } from './divider.component';

export * from './divider.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-divider': DividerComponent;
  }
}
