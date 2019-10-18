import {
  Component,
  html,
  LitElement,
  css,
  async,
  TemplateResult,
  CSSResult
} from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { NavService } from './nav.service';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'rx-nav',
  style: css`
    .backdrop {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  `,
  template(this: NavComponent) {
    return html`
      <style>
        ${async(this.styles)}
      </style>
      ${async(this.openSubject)} ${async(this.template)}
    `;
  }
})
export class NavComponent extends LitElement {
  @Inject(NavService) private nav: NavService;
  private styles: Observable<CSSResult> = this.nav.getStylesSubject();
  private template: Observable<TemplateResult> = this.nav.getTemplateSubject();
  private openSubject: Observable<
    TemplateResult
  > = this.nav.getOpenSubject().pipe(
    delay(20),
    map(
      options => html`
        <style>
          :host {
            left: ${options.left}px;
          }
        </style>
      `
    )
  );

  close() {
    this.nav.close();
  }
}
