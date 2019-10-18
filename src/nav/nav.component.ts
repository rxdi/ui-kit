import {
  Component,
  html,
  LitElement,
  async,
  TemplateResult,
  CSSResult
} from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { Nav } from './nav.service';
import { map, delay, mergeMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'rx-nav',
  template(this: NavComponent) {
    return html`
      <style>
          :host {
          z-index: 1000;
        }
          ${async(this.styles)}
      </style>
      ${async(this.openSubject)} ${async(this.template)}
    `;
  }
})
export class NavComponent extends LitElement {
  @Inject(Nav) private nav: Nav;
  private styles: Observable<CSSResult> = this.nav.getStylesSubject();
  private template: Observable<TemplateResult> = this.nav.getTemplateSubject();
  private initDelaySet: boolean;
  private defaultDelay = 30;
  private openSubject: Observable<
    TemplateResult
  > = this.nav.getOpenSubject().pipe(
    mergeMap(i =>
      of(i).pipe(
        delay(
          this.initDelaySet ? this.defaultDelay : i.delay || this.defaultDelay
        ),
        tap(() => (this.initDelaySet = true))
      )
    ),
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
