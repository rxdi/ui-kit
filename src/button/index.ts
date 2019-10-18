import { ButtonComponent } from './button.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-button': ButtonComponent;
  }
}

export * from './button.component';
