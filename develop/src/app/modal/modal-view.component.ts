import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Inject, Injector } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';
import { MODAL_DIALOG_DATA } from '../../../../src/modal/interface';
import { fromEvent, of } from 'rxjs';
import { tap, switchMap, concatMap, map, mergeMap } from 'rxjs/operators';
import value from '*.jpeg';

const add1 = n => n + 1;

@Component({
  selector: 'test-modal',
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
  private data: number;

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
    // debugger;
    this.modalService.close(this.data);
  }
}

@Component({
  selector: 'modal-view-component',
  style: css`
    .button {
      cursor: pointer;
      padding: 20px;
      margin: 20px;
      background-color: blue;
    }
    .button:hover {
      opacity: 0.9;
    }
  `,
  template(this: ModalViewComponent) {
    return html`
      <div @click=${() => this.openBasicModal()} class="button">
        Open Basic Modal
      </div>
      <div @click=${() => this.openAdvancedModal()} class="button">
        Open Advanced Modal
      </div>

      <div @click=${() => this.openModalSequence()} class="button">
        Open Modal Sequence
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
    this.modalService
      .openComponent(TestModal, { test: 'I am a test data' })
      .subscribe(console.log);
  }

  openModalSequence() {
    const data = Array(5)
      .fill(null)
      .map((_, i) => ({ component: TestModal, data: i }));
    of(data)
      .pipe(switchMap(this.modalService.openSequence.bind(this.modalService)))
      .subscribe(console.log);
  }

  closeModal() {
    this.modalService.close();
  }

  startWizard(data: any) {}
}
