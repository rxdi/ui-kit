import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Inject, Injector } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';
import {
  MODAL_DIALOG_DATA,
  MODAL_DIALOG_OPTIONS
} from '../../../../src/modal/interface';
import { MainModalComponent, openMainModal } from '../../../../src/modals';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'test-modal',
  template(this: TestModal) {
    return html`
      <div style="margin: 0 auto; width: 600px;">
        Test Modal ${JSON.stringify(this.data)}

        <div
          @click=${() => this.close()}
          style="cursor:pointer; padding: 20px;"
        >
          Close
        </div>
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

      <div
        @click=${() =>
          openMainModal(
            {
              title: `Default`,
              description: `

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
      `
            },
            { backdropClose: true }
          ).subscribe()}
        class="button"
      >
        Open Main Modal
      </div>
    `;
  }
})
export class ModalViewComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  openBasicModal() {
    this.modalService
      .open(
        html`
          <div
            @click=${() => this.modalService.close(false)}
            style="cursor:pointer; padding: 20px; background-color: blue"
          >
            Close Modal
          </div>
        `
      )
      .subscribe();
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
}
