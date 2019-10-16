import { Component, LitElement, html } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';

@Component({
  selector: 'test-modal',
  template(this: TestModal) {
    return html`
      Test Modal
    `;
  }
})
export class TestModal extends LitElement {}

@Component({
  selector: 'modal-view-component',
  template(this: ModalViewComponent) {
    return html`
      <div
        @click=${() => this.openBasicModal()}
        style="cursor:pointer; padding: 20px; background-color: blue"
      >
        Open Basic Modal
      </div>
      <div
        @click=${() => this.openAdvancedModal()}
        style="cursor:pointer; padding: 20px; background-color: blue"
      >
        Open Advanced Modal
      </div>
    `;
  }
})
export class ModalViewComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  openBasicModal() {
    this.modalService.open(
      html`
        <style>
          :host {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: absolute;
            background-color: black;
          }
        </style>
        <div @click=${() => this.closeModal()}>Close Modal</div>
      `
    );
  }

  openAdvancedModal() {
    this.modalService.openComponent(TestModal);
  }

  closeModal() {
    this.modalService.close();
  }
}
