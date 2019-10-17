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

In order to have `backdropClose` which by default is disabled you need to provide optional config

> `style` With this property you can specify default `modal-container` CSS

> `backdropClose` when click outside of the visible modal area dialog will close
```typescript
import { ModalModule } from '@rxdi/ui-kit/modal';

@Module({
  imports: [
    ModalModule.forRoot({
      backdropClose: true,
      style: css`
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
          pointer-events: all;
        }
      `
    })
  ]
})
export class AppModule {}
```

Three steps demo modal:

1. Inject `ModalService` inside component

```typescript
import { ModalService } from '@rxdi/ui-kit/modal';

@Component({
  selector: 'modal-view-component',
  template(this: ModalViewComponent) {
    return html`My test modal`;
  }
})
export class ModalViewComponent extends LitElement {
  @Inject(ModalService) private modalService: ModalService;
}
```

2. Define `descriptor` to open modal dialog

```typescript
openModal() {
  this.modalService.open(html`My Modal Content, <div @click=${this.modalService.close()}>Close</div>`)
}
```

3. Now lets execute `openModal`

```typescript
import { ModalService } from '@rxdi/ui-kit/modal';
import { html, LitElement, Component } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';

@Component({
  selector: 'modal-view-component',
  template(this: ModalViewComponent) {
    return html`
      <div @click=${() => this.openModal()}>Open Modal Dialog</div>
    `;
  }
})
export class ModalViewComponent extends LitElement {
  @Inject(ModalService) private modalService: ModalService;

  openModal() {
    this.modalService.open(
      html`
        My Modal Content,
        <div @click=${this.modalService.close()}>Close</div>
      `
    ).subscribe();
  }
}

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
import { ModalService } from '@rxdi/ui-kit/modal/modal.service';
import { MODAL_DIALOG_DATA } from '@rxdi/ui-kit/modal/interface';

/* TestModal Component */
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

/* Modal View Component */
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


##### Using it to spawn `Wizards` or Sequence of modals

```typescript

import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { Inject, Injector } from '@rxdi/core';
import { ModalService } from '@rxdi/ui-kit/modal/modal.service';
import { MODAL_DIALOG_DATA } from '@rxdi/ui-kit/modal/interface';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


/* TestModal Component */
@Component({
  selector: 'test-modal',
  template(this: TestModal) {
    return html`
      Test Modal ${JSON.stringify(this.data)}

      <div
        @click=${() => this.close()}
        style="cursor:pointer; padding: 20px;position: absolute; bottom: 0; right: 0"
      >
        Close
      </div>
    `;
  }
})
export class TestModal extends LitElement {
  @Injector(MODAL_DIALOG_DATA)
  private data: number;

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
    // debugger;
    this.modalService.close(this.data);
  }
}


/* Modal View Component */
@Component({
  selector: 'modal-view-component',
  style: css`
    .button {
      cursor: pointer;
      padding: 20px;
      margin: 20px;
      background-color: blue;
    }
    .button:hover {
      opacity: 0.9;
    }
  `,
  template(this: ModalViewComponent) {
    return html`
      <div @click=${() => this.startWizard()} class="button">
        Open Modal Sequence
      </div>
    `;
  }
})
export class ModalViewComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  startWizard() {
    const data = Array(5)
      .fill(null)
      .map((_, i) => ({ component: TestModal, data: i }));
    of(data)
      .pipe(switchMap((v) => this.modalService.openSequence(v)))
      .subscribe(console.log);
  }

  closeModal() {
    this.modalService.close();
  }

}

```