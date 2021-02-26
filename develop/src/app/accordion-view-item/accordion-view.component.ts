import { html, Component, LitElement } from '@rxdi/lit-html';

/**
 * @customElement accordion-view-component
 */
@Component({
  selector: 'accordion-item-view-component',
  template(this: AccordionItemViewComponent) {
    return html`
      <rx-accordion-item @clicked=${(e) => console.log(e.detail)}>
        <div slot="title">Why should i upgrade ?</div>
        <div slot="content">Optimized for best experience...</div>
      </rx-accordion-item>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/accordion-item/README.md"
      ></markdown-reader>
    `;
  },
})
export class AccordionItemViewComponent extends LitElement {}
