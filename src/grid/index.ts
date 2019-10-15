import { GridComponent } from './grid.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-grid': GridComponent;
  }
}


export * from './grid.component';
