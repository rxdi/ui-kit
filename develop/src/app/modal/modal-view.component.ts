import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Inject, Injector } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';
import { MODAL_DIALOG_DATA } from '../../../../src/modal/interface';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'test-modal',
  style: css`
    :host {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
    }
  `,
  template(this: TestModal) {
    return html`
      Test Modal ${JSON.stringify(this.data)}

      <div
        @click=${() => this.close()}
        style="cursor:pointer; padding: 20px;position: absolute; bottom: 0; right: 0"
      >
        Close
      </div>
    `;
  }
})
export class TestModal extends LitElement {
  @Injector(MODAL_DIALOG_DATA)
  private data: { omg: string };

  @Inject(ModalService)
  private modalService: ModalService;

  private modalRef = this.modalService.getRef();
  OnInit() {
    console.log('test-modal initialized');
  }
  OnDestroy() {
    console.log('test-modal destroyed');
  }

  close() {
    this.removeEventListener('click', () => this.close());
    this.modalService.close();
  }
}

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
        <div
          @click=${() => this.closeModal()}
          style="cursor:pointer; padding: 20px; background-color: blue"
        >
          Close Modal
        </div>
      `
    );
  }

  openAdvancedModal() {
    this.modalService.openComponent(TestModal, { omg: 'dada' });
  }

  closeModal() {
    this.modalService.close();
  }
}
