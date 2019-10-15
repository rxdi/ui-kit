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
      </style>
      <img
        src=${this.image}
        style=${styleMap({
          display: 'block',
          width: '100%',
          height: '100%',
          'background-repeat': 'no-repeat',
          'background-size': 'contain'
        })}
      />
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
    this.onLoadSubscription = fromEvent<HTMLImageElement>(this.element, 'load')
      .pipe(
        map(detail =>
          this.dispatchEvent(
            new CustomEvent<HTMLImageElement>('onLoad', { detail })
          )
        )
      )
      .subscribe();
    this.onErrorSubscription = fromEvent<HTMLImageElement>(
      this.element,
      'error'
    )
      .pipe(
        map(detail =>
          this.dispatchEvent(
            new CustomEvent<HTMLImageElement>('onError', { detail })
          )
        )
      )
      .subscribe();
  }

  OnDestroy() {
    this.onErrorSubscription.unsubscribe();
    this.onLoadSubscription.unsubscribe();
  }
}
