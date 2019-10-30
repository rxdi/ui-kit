import { LoadingComponent } from './loading.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-loading': LoadingComponent;
  }
}

export * from './loading.component';
