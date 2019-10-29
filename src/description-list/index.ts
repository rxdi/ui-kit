import { DescriptionListComponent } from './description-list.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-description': DescriptionListComponent;
  }
}

export * from './description-list.component';
