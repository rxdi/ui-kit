import { SpinnerComponent } from './spinner.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-spinner': SpinnerComponent;
  }
}

export * from './spinner.component';
