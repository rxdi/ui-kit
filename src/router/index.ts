import { RouterOutlet } from './router.component';

export * from './router.component';



declare global {
  interface HTMLElementTagNameMap {
    'router-outlet2': RouterOutlet;
  }
}

