import { AlertComponent } from './alert.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-alert': AlertComponent;
  }
}

export * from './alert.component';
