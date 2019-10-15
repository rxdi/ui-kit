import { html, Component, LitElement } from '@rxdi/lit-html';
import { AccordionItem } from '../../../../src/accordion/model';

/**
 * @customElement accordion-view-component
 */
@Component({
  selector: 'accordion-view-component',
  template(this: AccordionViewComponent) {
    return html`
      <div style="max-width: 500px; background-color: white">
        <rx-accordion .multiple=${true} .items=${this.items}></rx-accordion>
      </div>
    `;
  }
})
export class AccordionViewComponent extends LitElement {
  items: AccordionItem[] = [
    {
      title: html`
        <span style="color: red">Item 1</span>
      `,
      content: html`
        <span style="color: red"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
        >
      `
    },
    {
      title: 'Item 2',
      content: `
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor reprehenderit.`
    },
    {
      title: 'Item 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Item 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
}
