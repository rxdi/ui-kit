import {
  Component,
  LitElement,
  html,
  css,
  svg,
  query,
  CSSResult
} from '@rxdi/lit-html';
import { Inject, Container, Injector } from '@rxdi/core';
import { ModalService } from '../modal/modal.service';
import { MODAL_DIALOG_OPTIONS, MODAL_DIALOG_DATA } from '../modal/interface';

interface DialogData {
  title: string;
  description: string;
  style?: CSSResult;
}

@Component({
  selector: 'rx-modal-main',
  style: css`
    .backdrop {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 10;
      background: rgba(0, 0, 0, 0.32);
    }
    .dialog {
      position: relative;
      box-sizing: border-box;
      transform: translateY(0);
      margin: 80px auto;
      background: #fff;
      width: 600px;
      box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
        0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
      transition: 0.3s linear;
      transition-property: opacity, transform;
      max-width: calc(100% - 0.01px) !important;
      padding: 30px 30px;
      color: #666;
      z-index: 12;
    }

    h1 {
      margin-top: 0;
      font-size: 30px;
      line-height: 1.3;
      margin: 0 0 20px 0;
      font-family: ProximaNova, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-weight: 300;
      color: #222;
      text-transform: none;
    }
    button {
      position: absolute;
      z-index: 1010;
      top: 10px;
      right: 10px;
      padding: 5px;
      border: none;
      cursor: pointer;
      text-transform: none;
      outline: none;
      background-color: transparent;
    }
    p {
      font-size: 15px;
      font-weight: normal;
      line-height: 1.5;
    }
  `,
  template(this: MainModalComponent) {
    return html`
      <style>
        ${this.data.style}
      </style>
      <div class="dialog">
        <button @click=${() => this.close()}>
          ${svg`
        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>
        `}
        </button>

        <h1>${this.data.title}</h1>

        <p>
          ${this.data.description}
        </p>
      </div>
      <div class="backdrop"></div>
    `;
  }
})
export class MainModalComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  @Injector(MODAL_DIALOG_DATA)
  private data: DialogData;

  @Injector(MODAL_DIALOG_OPTIONS)
  private options: MODAL_DIALOG_OPTIONS;

  @query('.backdrop')
  private backdrop: HTMLElement;

  OnUpdateFirst() {
    if (this.options.backdropClose) {
      this.backdrop.addEventListener('click', () => this.close());
    }
  }
  close() {
    this.modalService.close(true);
  }
}

export function openMainModal(
  options: DialogData,
  settings: MODAL_DIALOG_OPTIONS = { backdropClose: true }
) {
  return Container.get(ModalService).openComponent(
    MainModalComponent,
    options,
    {
      backdropClose: settings.backdropClose,
      style:
        settings.style ||
        css`
          .wrapper {
            position: absolute;
            top: 0;
            left: 0;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            width: 100%;
            height: 100%;
          }

          .content {
            width: 100%;
            height: 100%;
            z-index: 20;
            position: absolute;
            pointer-events: all;
          }
        `
    }
  );
}
