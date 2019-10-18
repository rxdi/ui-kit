import { LabelComponent } from './label.component';

export * from './label.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-label': LabelComponent;
  }
}
