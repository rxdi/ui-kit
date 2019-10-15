import { AccordionComponent } from './accordion.component';

export * from './accordion.component';
export * from './model';

declare global {
  interface HTMLElementTagNameMap {
    'rx-accordion': AccordionComponent;
  }
}
