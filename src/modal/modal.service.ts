import { Injectable } from '@rxdi/core';
import { TemplateResult, html, unsafeHTML } from '@rxdi/lit-html';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class ModalService {
  private el: HTMLElement;
  private template: ReplaySubject<TemplateResult> = new ReplaySubject();

  open(template: TemplateResult) {
    this.el = document.createElement('modal-container');
    document.body.appendChild(this.el);
    this.template.next(template);
  }

  openComponent(component: any) {
    this.el = document.createElement('modal-container');
    document.body.appendChild(this.el);
    const tag = component.is();
    this.template.next(
      html`
        ${unsafeHTML(`<${tag}></${tag}>`)}
      `
    );
  }

  getTemplate() {
    return this.template.asObservable();
  }

  getRef() {
    return this.el;
  }

  close() {
    document.body.removeChild(this.el);
  }
}
