import { ProgressComponent } from './progress.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-progress': ProgressComponent;
  }
}

export * from './progress.component';
