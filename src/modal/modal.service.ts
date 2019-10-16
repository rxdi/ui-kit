import { Injectable, Container, Injector } from '@rxdi/core';
import { TemplateResult, html, unsafeHTML } from '@rxdi/lit-html';
import { ReplaySubject, fromEvent, Subscription, Observable } from 'rxjs';
import { MODAL_DIALOG_DATA, MODAL_DIALOG_OPTIONS } from './interface';
import { tap } from 'rxjs/operators';

@Injectable()
export class ModalService {
  private modalRef: HTMLElement;
  private modalTemplate: ReplaySubject<TemplateResult> = new ReplaySubject();
  private listener: Observable<Event>;
  private listenerSubscription: Subscription;
  @Injector(MODAL_DIALOG_OPTIONS) private options: MODAL_DIALOG_OPTIONS;

  OnInit() {
    if (this.options.backdropClose && this.modalRef) {
      this.listener = fromEvent(this.modalRef, 'click').pipe(
        tap(() => this.close())
      );
      this.listenerSubscription = this.listener.subscribe();
    }
  }

  removeListener() {
    this.listenerSubscription.unsubscribe();
  }

  open(template: TemplateResult) {
    this.createModal();
    this.modalTemplate.next(template);
  }

  openComponent(component: Function, options = {}) {
    if (!(component as any).is) {
      throw new Error(
        'Provide static method `is` inside component or if you use regular html`` template use `open` method instead of `openComponent`'
      );
    }
    this.createModal();
    const tag = (component as any).is();
    Container.remove(MODAL_DIALOG_DATA);
    Container.set(MODAL_DIALOG_DATA, options);
    this.modalTemplate.next(
      html`
        ${unsafeHTML(`<${tag}></${tag}>`)}
      `
    );
  }

  getTemplate() {
    return this.modalTemplate.asObservable();
  }

  getRef() {
    return this.modalRef;
  }

  close() {
    document.body.removeChild(this.modalRef);
  }

  private createModalContainer() {
    this.modalRef = document.createElement('modal-container');
  }

  private appendReference() {
    document.body.appendChild(this.modalRef);
  }

  private createModal() {
    if (this.modalRef) {
      this.removeModal();
    }
    this.createModalContainer();
    this.appendReference();
  }

  private removeModal() {
    this.modalRef.remove();
  }
}
