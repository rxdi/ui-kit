import { Component, html, LitElement, property } from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';

type InputType =
  | 'hidden'
  | 'text'
  | 'search'
  | 'tel'
  | 'url'
  | 'email'
  | 'password'
  | 'datetime'
  | 'date'
  | 'month'
  | 'week'
  | 'time'
  | 'datetime-local'
  | 'number'
  | 'range'
  | 'color'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'submit'
  | 'image'
  | 'reset'
  | 'button';

/**
 * @customElement rx-button
 */
@Component({
  selector: 'rx-button',
  template(this: ButtonComponent) {
    return html`
      <style>
        :host {
          margin: 0;
          border: none;
          overflow: visible;
          font: inherit;
          color: var(--${this.palette}-color);
          background: var(--${this.palette}-bg-color);
          border: var(--${this.palette}-border);
          color: #222;
          cursor: pointer;
          color: inherit;
          text-transform: none;
          -webkit-appearance: none;
          border-radius: 0;
          display: inline-block;
          box-sizing: border-box;
          padding: 0 30px;
          vertical-align: middle;
          font-size: 14px;
          line-height: 38px;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          transition: 0.1s ease-in-out;
          transition-property: color, background-color, border-color;
        }
        :host(:hover) {
          background-color: var(--${this.palette}-hover-color);
        }
        :host(:active) {
          background-color: var(--${this.palette}-active-color);
        }
        slot {
          user-select: none;
          color: var(--${this.palette}-color);
        }
      </style>
      <slot></slot>
    `;
  }
})
export class ButtonComponent extends LitElement {
  @property({ type: String })
  public palette: PalettesUnion = 'default';

  @property({ type: String })
  public type: InputType;

  OnUpdateFirst() {
    if (this.type === 'submit') {
      const form = this.getFormElement();
      if (form) {
        const input = document.createElement('input');
        input.style.display = 'none';
        input.type = this.type as InputType;
        form.append(input);
        this.addEventListener('click', () => input.click());
      }
    }
  }

  private getFormElement() {
    const get = (obj: Object = {}, path: string = '') =>
      path
        .replace(/\[(.+?)\]/g, '.$1')
        .split('.')
        .reduce((o, key) => (!o[key] ? o : o[key]), obj);
    const defaultKey = 'parentElement';
    let selector = '';
    let form: HTMLFormElement;

    for (const k of Array(1000).fill(defaultKey)) {
      if (!selector) {
        selector = k;
      } else {
        selector += `.${k}`;
      }
      const formElement = get(this.parentElement, selector);
      if (formElement && formElement.tagName === 'FORM') {
        form = formElement;
        break;
      }
    }
    return form;
  }
}
