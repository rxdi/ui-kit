import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'rx-modal-main',
  style: css`
    :host {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background-color: black;
    }
  `,
  template(this: MainModalComponent) {
    return html`
      <div
        @click=${() => this.close()}
        style="cursor:pointer;width: 100px; padding: 20px; background-color: blue"
      >
        Close Modal2
      </div>
    `;
  }
})
export class MainModalComponent extends LitElement {
  @Inject(ModalService) private modalService: ModalService;

  close() {
    this.modalService.close(true);
  }
}
