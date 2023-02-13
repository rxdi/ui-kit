import {
  Component,
  css,
  html,
  LitElement,
  property,
  styleMap,
  svg,
} from '@rxdi/lit-html';

export const FaqArrow = svg`
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
     <path
      fill="currentColor"
      d="M8.222 4.607a.737.737 0 000 1.055l5.944 5.838-5.944 5.838a.737.737 0 000 1.054.77.77 0 001.075 0l6.48-6.365a.737.737 0 000-1.054l-6.48-6.366a.77.77 0 00-1.075 0z"
     ></path>
    </svg>
    `;

/**
 * @customElement rx-accordion-item
 *
 * CSS Variables
 * --accordion-bg-color: rgb(255, 255, 255);
 * --accordion-content-bg-color: rgb(255, 255, 255);
 * --accordion-title-font-size: 20px;
 */
@Component({
  selector: 'rx-accordion-item',
  styles: [
    css`
    .container {
     position: relative;
     background: white;
     border-radius: 12px;
    }
    button {
     width: 100%;
     z-index: 2;
     padding: 0px;
     background: var(--accordeon-bg-color, rgb(255, 255, 255));
     box-shadow: rgb(26 66 75 / 3%) 0px 2px 4px, rgb(26 66 75 / 6%) 0px 10px 20px;
     color: rgb(111, 124, 166);
     text-align: left;
     white-space: initial;
     transition: color 250ms ease-in-out 0s;
     position: relative;
     display: inline-block;
     font-size: 14px;
     font-weight: 400;
     line-height: 1.5;
     text-decoration: none;
     border: 0px;
     outline: 0px;
     cursor: pointer;
     border-radius: 12px;
    }
 
    .icon {
     font-size: 50px;
     display: flex;
     -webkit-box-align: center;
     align-items: center;
     -webkit-box-pack: center;
     justify-content: center;
     position: absolute;
     top: 50%;
     margin-top: -0.5em;
     right: 28px;
     background-color: rgba(223, 235, 247, 0.4);
     border-radius: 50px;
     width: 1em;
     height: 1em;
 
     transition: transform 300ms ease-in-out 0s;
    }
 
    svg {
     display: block;
     stroke: currentcolor;
     stroke-width: 1px;
    }
    h4 {
     font-weight: 500;
     font-size: var(--accordion-title-font-size, 20px);
     line-height: 1.2;
     text-align: left;
     padding-left: 30px;
    }
 
    .content {
     border-radius: 12px;
     background-color: var(--accordion-content-bg-color, rgb(253, 254, 254));
     transition: all 500ms ease 0s;
     z-index: 1;
     overflow: hidden;
     margin-top: 10px;
     color: rgb(111, 124, 166);
     font-size: 18px;
     padding-bottom: 10px;
    }
   `,
  ],
  template(this: AccordionItemComponent) {
    return html`
    <div
     part="container"
     class="container"
     @click=${() => {
        this.opened = !this.opened;
        this.dispatchEvent(
          new CustomEvent('clicked', { detail: { el: this, opened: this.opened } }),
        );
      }}
    >
     <button part="button" type="button">
      <div
       part="icon"
       class="icon"
       style=${styleMap({
        transform: this.opened
          ? `rotate(${this.arrowRotationOpened})`
          : `rotate(${this.arrowRotationClosed})`,
      })}
      >
       ${FaqArrow}
      </div>
      <h4
       part="title"
       style=${styleMap({
        color: this.opened ? 'rgb(33, 43, 54)' : 'rgb(111, 124, 166)',
      })}
      >
       <slot name="title"></slot>
      </h4>
     </button>
    </div>
    <div
     style=${styleMap({
        'max-height': this.opened ? this.maxContentHeight : '0',
        opacity: this.opened ? '1' : '0',
        padding: this.opened ? '30px 36px 25.6px' : '0px 36px 0px',
        'margin-bottom': this.opened ? '10px' : '0px',
      })}
     part="content"
     class="content"
    >
     <slot name="content"></slot>
    </div>
   `;
  },
})
export class AccordionItemComponent extends LitElement {
  @property({ type: Boolean })
  opened = false;

  @property({ type: String })
  maxContentHeight = '1000px';

  @property({ type: String })
  arrowRotationClosed = '0deg';

  @property({ type: String })
  arrowRotationOpened = '90deg';
}
