import {
  Component,
  html,
  LitElement,
  styleMap,
  property,
  TemplateResult,
} from '@rxdi/lit-html';

/**
 * @customElement rx-image
 */
@Component({
  selector: 'rx-image',
  template(this: RxImageComponent) {
    return html`
      <style>
        :host {
          display: block;
          width: ${this.width};
          height: ${this.height};
        }
        img {
          visibility: hidden;
          width: 1px;
          position: absolute;
          height: 1px;
        }
      </style>
      ${this.image?.['_$litType$']
        ? html`<img />${this.image}`
        : html`<img
            @load=${this.dispatch('load')}
            @error=${this.dispatch('error')}
            src=${this.image}
          />`}

      <span
        style=${styleMap({
          display: 'block',
          width: '100%',
          height: '100%',
          'background-image': `url(${this.image})`,
          'background-repeat': 'no-repeat',
          'background-size': 'contain',
        })}
      ></span>
    `;
  },
})
export class RxImageComponent extends LitElement {
  @property()
  public image: string | TemplateResult<1> | TemplateResult<2>;

  @property({ type: String })
  public width = '80px';

  @property({ type: String })
  public height = '80px';

  dispatch(type: 'error' | 'load') {
    return (detail: Event) => {
      this.dispatchEvent(
        new CustomEvent<Event>(type === 'error' ? 'onError' : 'onLoad', {
          detail,
        })
      );
    };
  }
}
