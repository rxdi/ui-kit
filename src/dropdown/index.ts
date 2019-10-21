import { DropdownComponent } from './dropdown.component';

export * from './dropdown.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-dropdown': DropdownComponent;
  }
}
