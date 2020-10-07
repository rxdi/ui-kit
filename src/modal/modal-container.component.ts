import {
  Component,
  html,
  TemplateResult,
  async,
  LitElement
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
        ${this.options.style}
      </style>
      <div class="wrapper">
        <div class="content">${async(this.template)}</div>
        <div
          @click=${() =>
            this.options.backdropClose && this.modalService.close()}
          class="backdrop"
        ></div>
      </div>
    `;
  }
})
export class ModalContainerComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  private template: Observable<
    TemplateResult
  >;

  OnInit() {
    this.template = this.modalService.getTemplate()
  }

  @Injector(MODAL_DIALOG_OPTIONS)
  private options: MODAL_DIALOG_OPTIONS;
}
