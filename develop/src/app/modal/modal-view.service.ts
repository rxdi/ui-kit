import { Injectable, Inject } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';
import { html, css } from '@rxdi/lit-html';

@Injectable()
export class ModalViewService {
  @Inject(ModalService)
  private modalService: ModalService;

  openMainModal() {
    return this.modalService.openMainModal(
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
    );
  }

  openBasicModal() {
    return this.modalService.open(
      html`
        <div
          @click=${() => this.modalService.close(false)}
          style="cursor:pointer; padding: 20px; background-color: blue"
        >
          Close Modal
        </div>
      `
    );
  }

  openCustomMainModal() {
    return this.modalService.openMainModal(
      {
        template: html`
          <div style="padding: 15px 30px;border-bottom: 1px solid #e5e5e5;">
            <h1>Modal Title</h1>
          </div>
          <div
            style="padding: 10px 30px 10px 30px; border-bottom: 1px solid #e5e5e5;"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div style="text-align: right">
            <span @click=${() => this.modalService.close()}>Cancel</span>
            <span>Save</span>
          </div>
        `,
        style: css`
          .dialog {
            padding: 0 !important;
          }
        `
      },
      { backdropClose: false }
    );
  }
}
