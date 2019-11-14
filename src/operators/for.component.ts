import { Component, html, LitElement, property } from '@rxdi/lit-html';
import { Observable, isObservable, of } from 'rxjs';
import { LetComponent } from './let.component';

@Component({
  selector: 'rx-for',
  template: () =>
    html`
      <slot></slot>
    `
})
export class ForComponent extends LitElement {
  @property({ type: Array })
  public of: any[] | Observable<any[]> = of([]);
  OnUpdate() {
    const slotNode = this.shadowRoot.querySelector('slot').assignedNodes()[0];
    const letElement = slotNode.nextSibling as LetComponent;
    if (isObservable(this.of)) {
      letElement.data = this.of;
    } else {
      letElement.data = of(this.of);
    }
  }
}
