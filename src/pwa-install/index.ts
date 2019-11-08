import { PwaInstallComponent } from './pwa-install.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-pwa-install': PwaInstallComponent;
  }
}

export * from './pwa-install.component';
