import { Component, LitElement, html, svg, query } from '@rxdi/lit-html';
import { Inject, Injector } from '@rxdi/core';
import { ModalService } from '../../modal/modal.service';
import { MODAL_DIALOG_OPTIONS, MODAL_DIALOG_DATA } from '../../modal/interface';
import { DialogData } from './interface';
import { style, button } from './style.css';

@Component({
  selector: 'rx-modal-main',
  styles: [
    style,
    button
  ],
  template(this: MainModalComponent) {
    return html`
      <style>
        ${this.data.style}
      </style>
      <div class="container">
        <div class="dialog">
          <button @click=${() => this.close()}>
            ${svg`
              <svg width="14" height="14" viewBox="0 0 14 14">
                <line fill="none" stroke="#666" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                <line fill="none" stroke="#666" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
              </svg>
            `}
          </button>
          ${this.data.template
            ? html`
                ${this.data.template}
              `
            : html`
                <h1>${this.data.title}</h1>
                <p>
                  ${this.data.description}
                </p>
              `}
        </div>
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
