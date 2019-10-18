import { Injectable } from '@rxdi/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { TemplateResult, html, CSSResult, css } from '@rxdi/lit-html';
interface NavOptions {
  left?: number;
  delay?: number;
}
@Injectable({ init: true })
export class Nav {
  private openSubject: BehaviorSubject<NavOptions> = new BehaviorSubject({
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

  setStylesSubject(style: CSSResult) {
    this.stylesSubject.next(style);
  }

  open(
    options: {
      template?: TemplateResult;
      styles?: CSSResult;
      ref?: HTMLElement;
      navOptions?: NavOptions;
    } = { navOptions: { left: 0, delay: 20 } }
  ) {
    this.removeRef();
    this.createRef();
    this.attachRef(options.ref);
    if (options.styles) {
      this.stylesSubject.next(options.styles);
    }
    this.template.next(options.template || html``);
    this.openSubject.next(options.navOptions);
  }

  getNavRef() {
    return this.navRef;
  }

  close(options: NavOptions = { left: -270, delay: 300 }) {
    this.openSubject
      .pipe(
        take(1),
        delay(options.delay)
      )
      .subscribe(() => this.removeRef());
    this.openSubject.next(options);
  }

  private removeRef() {
    if (this.navRef) {
      this.navRef.remove();
      this.navRef = null;
    }
  }

  private createRef() {
    this.navRef = document.createElement('rx-nav');
  }

  private attachRef(ref?: HTMLElement) {
    if (ref) {
      return ref.appendChild(this.navRef);
    }
    return document.body.appendChild(this.navRef);
  }
}
