import { GlowLoaderComponent } from './glow-loader.component';


declare global {
  interface HTMLElementTagNameMap {
    'rx-glow-loader': GlowLoaderComponent;
  }
}

export * from './glow-loader.component';
