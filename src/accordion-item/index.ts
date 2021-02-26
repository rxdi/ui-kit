import { AccordionItemComponent } from './accordion-item.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-accordion-item': AccordionItemComponent;
  }
}

export * from './accordion-item.component';
