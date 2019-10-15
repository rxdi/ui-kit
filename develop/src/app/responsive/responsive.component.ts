import { html, LitElement, Component, css, property } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { ResponsiveService } from '../../../../src/services/index';
import { Subscription } from 'rxjs';

/**
 * @customElement navbar-component
 */
@Component({
  selector: 'responsive-view',
  style: css``,
  template(this: ResponsiveViewComponent) {
    return html`
      <p>Move your browser width or height by pressing F12 on Chrome</p>
      ${JSON.stringify(this.widthHeight)} ${this.printResolutions()}
    `;
  }
})
export class ResponsiveViewComponent extends LitElement {
  @Inject(ResponsiveService) private responsive: ResponsiveService;
  @property({ type: Object }) widthHeight: { width: number; height: number };

  private subscription: Subscription = this.responsive
    .combineBoth()
    .subscribe(v => (this.widthHeight = v));

  OnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  printResolutions() {
    return [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000,
      1100,
      1200,
      1300,
      1400,
      1500
    ].map(r => {
      return html`
        <p>
          (Resolution ${r}px)
          ${this.widthHeight.width > r ? `MATCHED` : 'NOT-MATCHED'}
        </p>
      `;
    });
  }
}
