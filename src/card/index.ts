import { CardComponent } from './card.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-card': CardComponent;
  }
}

export * from './card.component';
