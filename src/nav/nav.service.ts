import { Injectable } from '@rxdi/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { TemplateResult, html, Template, CSSResult, css } from '@rxdi/lit-html';

@Injectable({ init: true })
export class NavService {
  private openSubject: BehaviorSubject<{ left: number }> = new BehaviorSubject({
    left: -270
  });

  private template: ReplaySubject<TemplateResult> = new ReplaySubject();
  private stylesSubject: BehaviorSubject<CSSResult> = new BehaviorSubject(css`
    :host {
      position: absolute;
      top: 0;
      transition: left 0.3s ease-out;
      bottom: 0;
      left: -270px;
      box-sizing: border-box;
      min-width: 270px;
      background: #fff;
      overflow-y: auto;
    }
  `);
  private navRef: HTMLElement;

  getOpenSubject() {
    return this.openSubject.asObservable();
  }

  getTemplateSubject() {
    return this.template.asObservable();
  }

  getStylesSubject() {
    return this.stylesSubject.asObservable();
  }

  open(options: { template?: TemplateResult; styles?: CSSResult } = {}) {
    this.removeRef();
    this.createRef();
    this.attachRef();
    if (options.styles) {
      this.stylesSubject.next(options.styles);
    }
    this.template.next(options.template || html``);
    this.openSubject.next({ left: 0 });
  }

  getNavRef() {
    return this.navRef;
  }

  close() {
    this.openSubject
      .pipe(
        take(1),
        delay(300)
      )
      .subscribe(() => this.removeRef());
    this.openSubject.next({ left: -270 });
  }

  private removeRef() {
    if (this.navRef) {
      this.navRef.remove();
    }
  }

  private createRef() {
    this.navRef = document.createElement('rx-nav');
  }

  private attachRef() {
    document.body.appendChild(this.navRef);
  }
}
