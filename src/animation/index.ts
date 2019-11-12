import { AnimationComponent } from './animation.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-animation': AnimationComponent;
  }
}

export * from './animation.component';
