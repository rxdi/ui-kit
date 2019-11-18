import { GraphComponent } from './graph.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-graph': any;
  }
}

export * from './graph.component';

export * from './graph.module';
export * from './types';
