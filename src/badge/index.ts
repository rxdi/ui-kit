import { BadgeComponent } from './badge.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-badge': BadgeComponent;
  }
}

export * from './badge.component';
