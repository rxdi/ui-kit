import { PaginationComponent } from './pagination.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-pagination': PaginationComponent;
  }
}

export * from './pagination.component';
