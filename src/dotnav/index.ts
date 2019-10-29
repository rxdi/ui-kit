import { DotnavComponent } from './dotnav.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-dotnet': DotnavComponent;
  }
}

export * from './dotnav.component';
