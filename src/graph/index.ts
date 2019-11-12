import { GraphComponent } from './graph.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-graph': GraphComponent;
  }
}

export * from './graph.component';

export * from './graph.module';
export * from './types';
