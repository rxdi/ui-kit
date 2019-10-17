import {
  Component,
  html,
  TemplateResult,
  async,
  LitElement,
  query
} from '@rxdi/lit-html';
import { Inject, Injector } from '@rxdi/core';
import { ModalService } from './modal.service';
import { Observable } from 'rxjs';
import { MODAL_DIALOG_OPTIONS } from './interface';

@Component({
  selector: 'modal-container',
  template(this: ModalContainerComponent) {
    return html`
      <style>
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

        .backdrop {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.5);
          pointer-events: all;
          z-index: 10;
        }

        .content {
          z-index: 20;
          position: absolute;
          /* width: 100%; */
          /* height: 100%; */
          pointer-events: all;
        }
      </style>
      <div class="wrapper">
      <div
          @click=${() =>
            this.options.backdropClose && this.modalService.close()}
          class="backdrop"
        ></div>
        <div class="content">${async(this.template)}</div>

      </div>
    `;
  }
})
export class ModalContainerComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  private template: Observable<
    TemplateResult
  > = this.modalService.getTemplate();

  @Injector(MODAL_DIALOG_OPTIONS)
  private options: MODAL_DIALOG_OPTIONS;
}
