
import { DocsComponent } from './docs.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-docs': DocsComponent;
  }
}

export * from './docs.component';
