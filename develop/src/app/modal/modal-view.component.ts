import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ModalViewService } from './modal-view.service';
import { TestModal } from './test-modal.component';

@Component({
  selector: 'modal-view-component',
  style: css`
    div {
      margin: 50px auto;
      width: 300px;
      display: grid;
    }
  `,
  template(this: ModalViewComponent) {
    return html`
      <div>
        <rx-button palette="primary" @click=${() => this.openBasicModal()}
          >Open Basic Modal</rx-button
        >
        <rx-button palette="primary" @click=${() => this.openAdvancedModal()}
          >Open Advanced Modal</rx-button
        >
        <rx-button palette="primary" @click=${() => this.openModalSequence()}
          >Open Modal Sequence</rx-button
        >
        <rx-button palette="primary" @click=${() => this.openCustomModal()}
          >Open Main Modal</rx-button
        >
        <rx-button palette="primary" @click=${() => this.openCustomMainModal()}
          >Open Main Custom Modal</rx-button
        >
        <rx-button
          palette="primary"
          @click=${() => this.openOverflowCustomModal()}
          >Open Overflow Custom Modal</rx-button
        >
        <rx-button palette="primary" @click=${() => this.openFullScreenModal()}
          >Open Fullscreen Modal</rx-button
        >
      </div>
    `;
  }
})
export class ModalViewComponent extends LitElement {
  @Inject(ModalViewService)
  private modalViewService: ModalViewService;

  @Inject(ModalService)
  private modalService: ModalService;

  openCustomModal() {
    this.modalViewService.openCustomModal().subscribe();
  }

  openCustomMainModal() {
    this.modalViewService.openCustomMainModal().subscribe();
  }

  openBasicModal() {
    this.modalViewService.openBasicModal().subscribe();
  }

  openAdvancedModal() {
    this.modalService
      .openComponent(TestModal, { test: 'I am a test data' })
      .subscribe(console.log);
  }

  openModalSequence() {
    const data = Array(5)
      .fill(null)
      .map((_, i) => ({ component: TestModal, data: i }));
    of(data)
      .pipe(switchMap(c => this.modalService.openSequence(c)))
      .subscribe(console.log);
  }

  openOverflowCustomModal() {
    this.modalViewService.openOverflowCustomModal().subscribe(console.log);
  }

  openFullScreenModal() {
    this.modalViewService.openFullScreenModal().subscribe(console.log);
  }
}
