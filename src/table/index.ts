import { TableComponent } from './table.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-table': TableComponent;
  }
}

export * from './table.component';
