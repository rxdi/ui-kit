import {
  Component,
  LitElement,
  html,
  property,
  css,
  styleMap
} from '@rxdi/lit-html';

/**
 * @customElement rx-dotnav
 */
@Component({
  selector: 'rx-dotnav',
  style: css`
    a {
      display: block;
      cursor: pointer;
      box-sizing: border-box;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: transparent;
      text-indent: 100%;
      overflow: hidden;
      white-space: nowrap;
      border: 1px solid rgba(102, 102, 102, 0.4);
      transition: 0.2s ease-in-out;
      transition-property: background-color, border-color;
    }
    .focus {
      background-color: rgba(102, 102, 102, 0.6);
      outline: none;
      border-color: transparent;
    }
  `,
  template(this: DotnavComponent) {
    return html`
      ${this.orientation === 'row'
        ? html`
            <style>
              a {
                margin-top: 0px;
                margin-right: 12px;
              }
            </style>
          `
        : html`
            <style>
              a {
                margin-top: 12px;
                margin-right: 0px;
              }
            </style>
          `}
      <div
        style=${styleMap({
          display: 'flex',
          'flex-direction': this.orientation
        })}
      >
        ${this.dots}
      </div>
    `;
  }
})
export class DotnavComponent extends LitElement {
  @property({ type: String })
  public orientation: 'row' | 'column' = 'row';

  @property({ type: Array })
  private dots: HTMLAnchorElement[];

  OnUpdateFirst() {
    this.dots = this.selectAllHrefs();
    this.attachListeners();
  }

  private selectAllHrefs() {
    return [...Array.from(this.querySelectorAll('a'))];
  }

  private attachListeners() {
    this.dots.forEach(el => this.attachListener(el));
  }

  private attachListener(el: HTMLElement) {
    el.addEventListener('click', () => this.focusElement(el));
  }

  private focusElement(el: HTMLElement) {
    this.dots.forEach(d => d.classList.remove('focus'));
    el.classList.add('focus');
  }
}
