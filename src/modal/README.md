# Modal Service

##### Usage

Inject `ModalModule` from `@rxdi/ui-kit/modal`

```typescript
import { ModalModule } from '@rxdi/ui-kit/modal';

@Module({
  imports: [ModalModule.forRoot()]
})
export class AppModule {}
```

##### Basic Usage

```typescript
import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { ModalService } from '@rxdi/ui-kit/modal';

@Component({
  selector: 'modal-view-component',
  template(this: ModalViewComponent) {
    return html`
      <div
        @click=${() => this.openBasicModal()}
        style="cursor:pointer; padding: 20px; background-color: blue"
      >
        Open Basic Modal
      </div>
    `;
  }
})
export class ModalViewComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  openBasicModal() {
    this.modalService.open(
      html`
        <style>
          :host {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: absolute;
            background-color: black;
          }
        </style>
        <div
          @click=${() => this.closeModal()}
          style="cursor:pointer; padding: 20px; background-color: blue"
        >
          Close Modal
        </div>
      `
    );
  }

  closeModal() {
    this.modalService.close();
  }
}
```

##### Using with `Component`

```typescript
import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Inject, Injector } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';
import { MODAL_DIALOG_DATA } from '../../../../src/modal/interface';

@Component({
  selector: 'test-modal',
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
  template(this: TestModal) {
    return html`
      Test Modal ${JSON.stringify(this.data)}

      <div
        @click=${() => this.close()}
        style="cursor:pointer; padding: 20px; background-color: blue"
      >
        Close
      </div>
    `;
  }
})
export class TestModal extends LitElement {
  @Injector(MODAL_DIALOG_DATA)
  private data: { omg: string };

  @Inject(ModalService)
  private modalService: ModalService;

  private modalRef = this.modalService.getRef();

  OnInit() {
    console.log('test-modal initialized');
  }
  OnDestroy() {
    console.log('test-modal destroyed');
  }

  close() {
    this.modalService.close();
  }
}

@Component({
  selector: 'modal-view-component',
  template(this: ModalViewComponent) {
    return html`
      <div
        @click=${() => this.openAdvancedModal()}
        style="cursor:pointer; padding: 20px; background-color: blue"
      >
        Open Advanced Modal
      </div>
    `;
  }
})
export class ModalViewComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  openAdvancedModal() {
    this.modalService.openComponent(TestModal, { omg: 'dada' });
  }
}
```
