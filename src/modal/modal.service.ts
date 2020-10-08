import { Injectable, Container, Injector } from '@rxdi/core';
import { TemplateResult, html, unsafeHTML, css } from '@rxdi/lit-html';
import { ReplaySubject, Observable, Subject, of, from } from 'rxjs';
import { MODAL_DIALOG_DATA, MODAL_DIALOG_OPTIONS } from './interface';
import { take, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { DialogData } from '../modals/main/interface';

@Injectable()
export class ModalService {
  @Injector(MODAL_DIALOG_OPTIONS)
  private options: MODAL_DIALOG_OPTIONS;
  private originalOptions: MODAL_DIALOG_OPTIONS;
  private modalRef: HTMLElement;
  private modalTemplate: ReplaySubject<TemplateResult> = new ReplaySubject();
  private closeSubject$ = new Subject();

  constructor() {
    this.originalOptions = Object.assign({}, this.options);
  }

  open<T>(template: TemplateResult, dialogOptions?: MODAL_DIALOG_OPTIONS) {
    this.overflow('hidden');
    return new Observable<T>(observer => {
      this.createModalPortal();
      if (dialogOptions) {
        this.setSettings(dialogOptions);
      }
      this.closeSubject$.pipe(take(1)).subscribe((stream: T) => {
        if (dialogOptions) {
          this.setSettings(this.originalOptions);
        }
        this.overflow('visible');
        observer.next(stream);
        observer.complete();
      });
      this.modalTemplate.next(template);
    });
  }

  openCustomModal<T = any>(
    data: DialogData,
    settings: MODAL_DIALOG_OPTIONS = { backdropClose: true }
  ): Observable<T> {
    this.overflow('hidden');
    return from(import('../modals/main/main')).pipe(
      map(main => main.MainModalComponent),
      switchMap(main =>
        this.openComponent(main, data, {
          backdropClose: settings.backdropClose,
          style:
            settings.style ||
            css`
              .wrapper {
                position: fixed;
                top: 0;
                left: 0;
                align-items: center;
                justify-content: center;
                pointer-events: none;
                width: 100%;
                height: 100%;
                z-index: 10000;
              }
              .content {
                width: 100%;
                height: 100%;
                z-index: 10001;
                position: fixed;
                pointer-events: all;
              }
            `
        })
      ),
      tap(() => this.overflow('visible'))
    );
  }

  overflow(type: 'hidden' | 'visible') {
    if (this.options.hideScroll) {
      document.body.style.overflow = type;
    }
  }

  openComponent<T = any>(
    component: Function,
    options = {},
    dialogOptions?: MODAL_DIALOG_OPTIONS
  ): Observable<T> {
    if (dialogOptions) {
      this.setSettings(dialogOptions);
    }
    this.overflow('hidden');
    return new Observable(observer => {
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
        this.overflow('visible');
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
    this.removeModalPortal();
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
