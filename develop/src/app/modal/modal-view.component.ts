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

      <div @click=${() => this.openMainModal()} class="button">
        Open Main Modal
      </div>

      <div @click=${() => this.openCustomMainModal()} class="button">
        Open Main Custom Modal
      </div>
    `;
  }
})
export class ModalViewComponent extends LitElement {
  @Inject(ModalViewService)
  private modalViewService: ModalViewService;

  @Inject(ModalService)
  private modalService: ModalService;

  openMainModal() {
    this.modalViewService.openMainModal().subscribe();
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
}
