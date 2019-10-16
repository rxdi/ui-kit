import {
  Component,
  html,
  TemplateResult,
  async,
  LitElement
} from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { ModalService } from './modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'modal-container',
  template(this: ModalContainerComponent) {
    return html`
      <div></div>
      ${async(this.template)}
    `;
  }
})
export class ModalContainerComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  private template: Observable<
    TemplateResult
  > = this.modalService.getTemplate();

  OnDestroy() {
    debugger;
  }
}
