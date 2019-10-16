import { Injectable } from '@rxdi/core';
import { TemplateResult, html, unsafeHTML, RXDIElement } from '@rxdi/lit-html';
import { ReplaySubject } from 'rxjs';
import { Component } from './interface';

@Injectable()
export class ModalService {
  private modalRef: HTMLElement;
  private modalTemplate: ReplaySubject<TemplateResult> = new ReplaySubject();

  open(template: TemplateResult) {
    this.createModal();
    this.modalTemplate.next(template);
  }

  openComponent(component) {
    this.createModal();
    const tag = component.is();
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
