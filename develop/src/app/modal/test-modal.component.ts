import { Injector, Inject } from '@rxdi/core';
import { MODAL_DIALOG_DATA } from '../../../../src/modal/interface';
import { Component, LitElement, html } from '@rxdi/lit-html';
import { ModalService } from '../../../../src/modal/modal.service';

@Component({
  selector: 'test-modal',
  template(this: TestModal) {
    return html`
      <div>
        Test Modal ${JSON.stringify(this.data)}
        <div style="text-align: right;padding: 20px 20px;">
          <rx-button palette="primary" @click=${() => this.close()}
            >Close</rx-button
          >
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
