import { Injectable, Container } from '@rxdi/core';
import { TemplateResult, html, unsafeHTML } from '@rxdi/lit-html';
import { ReplaySubject, Observable, Subject, of } from 'rxjs';
import { MODAL_DIALOG_DATA } from './interface';
import { take, map, concatMap } from 'rxjs/operators';

@Injectable()
export class ModalService {
  private modalRef: HTMLElement;
  private modalTemplate: ReplaySubject<TemplateResult> = new ReplaySubject();
  private closeSubject$ = new Subject();

  open(template: TemplateResult) {
    this.createModalPortal();
    this.modalTemplate.next(template);
  }

  openComponent<T>(component: Function, options = {}) {
    return new Observable<T>(observer => {
      if (!(component as any).is) {
        throw new Error(
          'Provide static method `is` inside component or if you use regular html`` template use `open` method instead of `openComponent`'
        );
      }
      this.createModalPortal();
      const tag = (component as any).is();
      Container.remove(MODAL_DIALOG_DATA);
      Container.set(MODAL_DIALOG_DATA, options);
      this.modalTemplate.next(
        html`
          ${unsafeHTML(`<${tag}></${tag}>`)}
        `
      );
      this.closeSubject$.pipe(take(1)).subscribe((stream: T) => {
        observer.next(stream);
        observer.complete();
      });
    });
  }

  openSequence<T>(components: { component: Function; data: T }[]) {
    const identity = v => v;
    return of(components).pipe(
      map(val => val.map(v => this.openComponent(v.component, v.data))),
      concatMap(identity),
      concatMap(identity)
    );
  }

  getTemplate() {
    return this.modalTemplate.asObservable();
  }

  getRef() {
    return this.modalRef;
  }

  close<T>(result?: T) {
    document.body.removeChild(this.modalRef);
    this.closeSubject$.next(result);
  }

  private createModalContainer() {
    this.modalRef = document.createElement('modal-container');
  }

  private appendReference() {
    document.body.appendChild(this.modalRef);
  }

  private createModalPortal() {
    if (this.modalRef) {
      this.removeModalPortal();
    }
    this.createModalContainer();
    this.appendReference();
  }

  private removeModalPortal() {
    this.modalRef.remove();
  }
}
