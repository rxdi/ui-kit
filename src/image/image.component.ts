import {
  Component,
  html,
  LitElement,
  styleMap,
  property,
  query
} from '@rxdi/lit-html';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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
      <img src=${this.image} />
      <span
        style=${styleMap({
          display: 'block',
          width: '100%',
          height: '100%',
          'background-image': `url(${this.image})`,
          'background-repeat': 'no-repeat',
          'background-size': 'contain'
        })}
      ></span>
    `;
  }
})
export class RxImageComponent extends LitElement {
  @property({ type: String })
  public image: string;

  @property({ type: String })
  public width = '80px';

  @property({ type: String })
  public height = '80px';

  @query('img')
  private element: HTMLImageElement;

  private onLoadSubscription: Subscription;
  private onErrorSubscription: Subscription;

  OnUpdateFirst() {
    this.onLoadSubscription = this.createSubscription('load').subscribe();
    this.onErrorSubscription = this.createSubscription('error').subscribe();
  }

  createSubscription(type: 'error' | 'load') {
    return fromEvent<HTMLImageElement>(this.element, type).pipe(
      map(detail =>
        this.dispatchEvent(
          new CustomEvent<HTMLImageElement>(
            type === 'error' ? 'onError' : 'onLoad',
            { detail }
          )
        )
      )
    );
  }

  OnDestroy() {
    this.onErrorSubscription.unsubscribe();
    this.onLoadSubscription.unsubscribe();
  }
}
