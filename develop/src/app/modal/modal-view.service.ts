import { Injectable, Inject } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';
import { html, css } from '@rxdi/lit-html';
import { OverflowText } from './data';

@Injectable()
export class ModalViewService {
  @Inject(ModalService)
  private modalService: ModalService;

  openCustomModal() {
    return this.modalService.openCustomModal(
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
        <div style="text-align: right;padding: 20px 20px;">
          <rx-button palette="primary" @click=${() => this.modalService.close()}
            >Close</rx-button
          >
        </div>
      `
    );
  }

  openCustomMainModal() {
    return this.modalService.openCustomModal(
      {
        template: html`
          <div style="padding: 15px 30px;border-bottom: 1px solid #e5e5e5;">
            <h1>Custom modal</h1>
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
          <div style="text-align: right;padding: 20px 20px;">
            <rx-button @click=${() => this.modalService.close()}
              >Cancel</rx-button
            >
            <rx-button palette="primary">Save</rx-button>
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

  openOverflowCustomModal() {
    return this.modalService.openCustomModal(
      {
        template: html`
          <div style="padding: 15px 30px;border-bottom: 1px solid #e5e5e5;">
            <h1>Overflow</h1>
          </div>
          <div class="content">
            <p>
              ${OverflowText}
            </p>
          </div>
          <div style="text-align: right;padding: 20px 20px;">
            <rx-button @click=${() => this.modalService.close()}
              >Cancel</rx-button
            >
            <rx-button palette="primary">Save</rx-button>
          </div>
        `,
        style: css`
          .dialog {
            padding: 0 !important;
          }
          .content {
            padding: 10px 30px 10px 30px;
            border-bottom: 1px solid #e5e5e5;
            overflow: auto;
            min-height: 150px;
            max-height: 555px;
          }
        `
      },
      { backdropClose: true }
    );
  }

  openFullScreenModal() {
    return this.modalService.openCustomModal(
      {
        template: html`
          <div class="flex-grid">
            <img src="https://getuikit.com/docs/images/photo.jpg" />
            <h1>Full-screen modal</h1>
          </div>
        `,
        style: css`
          .container {
            padding: 0px !important;
          }
          .flex-grid {
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
            list-style: none;
          }
          img {
            background-position: 50% 50%;
            background-repeat: no-repeat;
            width: 50%;
            min-height: calc(100vh);
            box-sizing: border-box;
            background-size: cover;
          }
          .dialog {
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
          }

          .container {
            height: 100%;
          }
        `
      },
      { backdropClose: false }
    );
  }
}
