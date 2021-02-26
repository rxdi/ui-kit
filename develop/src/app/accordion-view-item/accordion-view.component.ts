import { html, Component, LitElement, css } from '@rxdi/lit-html';

/**
 * @customElement accordion-view-component
 */
@Component({
  selector: 'accordion-item-view-component',
  style: css`
  .container {
    background: rgb(249, 250, 252);
    padding: 50px;
  }
  `,
  template(this: AccordionItemViewComponent) {
    return html`
     <div class="container">
     <rx-accordion-item @clicked=${(e) => console.log(e.detail)}>
        <div slot="title">Why should i upgrade ?</div>
        <div slot="content">Optimized for best experience...</div>
      </rx-accordion-item>
      <rx-accordion-item @clicked=${(e) => console.log(e.detail)}>
        <div slot="title">Is this the best choice ?</div>
        <div slot="content">Probably not but it will do the job...</div>
      </rx-accordion-item>
    </div>
    <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/accordion-item/README.md"
      ></markdown-reader>

    `;
  },
})
export class AccordionItemViewComponent extends LitElement {}
