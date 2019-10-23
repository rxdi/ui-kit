import { IfComponent } from './if.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-if': IfComponent;
  }
}

export * from './if.component';
