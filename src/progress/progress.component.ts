import { Component, html, LitElement, property } from '@rxdi/lit-html';
import { PalettesUnion } from '../settings';
import { progressCss } from './circle.css';
/**
 * @customElement rx-progress
 */
@Component({
  selector: 'rx-progress',
  template(this: ProgressComponent) {
    return html`
      <style>
        :host {
          display: ${this.type === 'bar' ? 'block' : 'inline-block'};
        }
        .container {
          display: flex;
          height: ${this.type === 'circle'
            ? this.height <= 12
              ? this.height * 10 + 20
              : 140
            : this.height}px;
          overflow: hidden;
          width: ${this.type === 'circle'
            ? this.height <= 12
              ? this.height * 10 + 20 + 'px'
              : '140px'
            : '100%'};

          justify-content: ${this.type === 'bar' ? 'start' : 'center'};
          align-items: ${this.type === 'bar' ? 'flex-start' : 'center'};
        }
        .bar {
          width: ${this.value}%;
          height: 100%;
          background-color: var(--${this.palette}-bg-color);
          transition: width 0.4s ease;
          border-radius: ${this.rounded ? this.height / 2 + 'px' : '0px'};
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .label {
          font-size: 0.5em;
          font-weight: bold;
        }

        ${this.type === 'circle' ? progressCss : ''} .uikit.dark {
          background-color: #777777;
        }
        .uikit.dark .bar,
        .uikit.dark .fill {
          border-color: var(--${this.palette}-bg-color) !important;
        }
        .uikit.dark > span {
          color: var(--${this.palette}-color);
        }
        .uikit.dark:after {
          background-color: #666666;
        }
        .uikit.dark:hover > span {
          color: var(--${this.palette}-color);
        }

        .uikit {
          font-size: ${this.height <= 12 ? this.height * 10 : 120}px;
        }
      </style>
      <div class="container">
        ${this.type === 'bar'
          ? html`
              <div class="bar">
                ${this.label && this.value > 5
                  ? html`
                      <span class="label">${this.label ? this.value + '%' : ''}</span>
                    `
                  : ''}
              </div>
            `
          : html`
              <div class="uikit p${this.value} dark">
                <span>${this.value}%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
            `}
      </div>
    `;
  }
})
export class ProgressComponent extends LitElement {
  @property({ type: String })
  public palette: PalettesUnion = 'default';

  @property({ type: Number })
  public height = 8;

  private _value = 0;
  @property({ type: Number })
  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    const oldValue = this._value;
    this._value = value > 100 ? 100 : value;
    this.requestUpdate('value', oldValue);
  }

  @property({ type: Boolean })
  public rounded = false;

  @property({ type: Boolean })
  public label = false;

  @property({ type: String })
  public type: 'bar' | 'circle' = 'bar';
}
