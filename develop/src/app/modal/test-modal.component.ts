import { Injector, Inject } from '@rxdi/core';
import { MODAL_DIALOG_DATA } from '../../../../src/modal/interface';
import { Component, LitElement, html } from '@rxdi/lit-html';
import { ModalService } from '../../../../src/modal/modal.service';

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
