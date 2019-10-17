import { Injectable, Container, Injector } from '@rxdi/core';
import { TemplateResult, html, unsafeHTML } from '@rxdi/lit-html';
import { ReplaySubject, Observable, Subject, of } from 'rxjs';
import { MODAL_DIALOG_DATA, MODAL_DIALOG_OPTIONS } from './interface';
import { take, map, concatMap } from 'rxjs/operators';

@Injectable()
export class ModalService {
  @Injector(MODAL_DIALOG_OPTIONS)
  private options: MODAL_DIALOG_OPTIONS;
  private originalOptions = Object.assign({}, this.options);

  private modalRef: HTMLElement;
  private modalTemplate: ReplaySubject<TemplateResult> = new ReplaySubject();
  private closeSubject$ = new Subject();

  open<T>(template: TemplateResult, dialogOptions?: MODAL_DIALOG_OPTIONS) {
    return new Observable<T>(observer => {
      this.createModalPortal();
      if (dialogOptions) {
        this.setSettings(dialogOptions);
      }
      this.closeSubject$.pipe(take(1)).subscribe((stream: T) => {
        if (dialogOptions) {
          this.setSettings(this.originalOptions);
        }
        observer.next(stream);
        observer.complete();
      });
      this.modalTemplate.next(template);
    });
  }

  openComponent<T>(
    component: Function,
    options = {},
    dialogOptions?: MODAL_DIALOG_OPTIONS
  ) {
    if (dialogOptions) {
      this.setSettings(dialogOptions);
    }
    return new Observable<T>(observer => {
      const tag = (component as any).is;
      if (!tag) {
        throw new Error(
          'Provide static method `is` inside component or if you use regular html`` template use `open` method instead of `openComponent`'
        );
      }
      this.createModalPortal();
      Container.remove(MODAL_DIALOG_DATA);
      Container.set(MODAL_DIALOG_DATA, options);
      this.modalTemplate.next(
        html`
          ${unsafeHTML(`<${tag()}></${tag()}>`)}
        `
      );
      this.closeSubject$.pipe(take(1)).subscribe((stream: T) => {
        if (dialogOptions) {
          this.setSettings(this.originalOptions);
        }
        observer.next(stream);
        observer.complete();
      });
    });
  }

  private setSettings(options: MODAL_DIALOG_OPTIONS) {
    Container.remove(MODAL_DIALOG_OPTIONS);
    Container.set(MODAL_DIALOG_OPTIONS, options);
  }

  openSequence<T>(
    components: {
      component: Function;
      data: T;
      options?: MODAL_DIALOG_OPTIONS;
    }[]
  ) {
    const identity = v => v;
    return of(components).pipe(
      map(val =>
        val.map(v => this.openComponent(v.component, v.data, v.options))
      ),
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
