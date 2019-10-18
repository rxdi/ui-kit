import { html, Component, LitElement, css } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';

/**
 * @customElement badge-view-component
 */
@Component({
  selector: 'badge-view-component',
  style: css`
    rx-badge {
      display: block;
    }
  `,
  template(this: BadgeViewComponent) {
    return html`
      <rx-badge>1</rx-badge>
      <rx-badge background="red" color="white">10</rx-badge>
      <rx-badge palette="primary">100</rx-badge>
      <rx-badge palette="primary">1000</rx-badge>
      <rx-badge palette="primary">10000</rx-badge>
      <rx-badge palette="secondary">100000</rx-badge>
      <rx-badge palette="danger">1000000</rx-badge>
      <rx-badge palette="warning">10000000</rx-badge>
    `;
  }
})
export class BadgeViewComponent extends LitElement {
  @Inject(ModalService)
  private modalService: ModalService;

  OnInit() {
    // setTimeout(() => this.dynamicCss.changeStyle({
    //   default: css``,
    //   primary: css``,
    //   secondary: css``
    // }), 5000);

    // this.modalService.open(
    //   html`
    //     <style>
    //       :host {
    //         position: fixed;
    //         top: 0;
    //         right: 0;
    //         bottom: 0;
    //         left: 0;
    //         z-index: 1010;
    //         overflow-y: auto;
    //         -webkit-overflow-scrolling: touch;
    //         padding: 15px 15px;
    //         background: rgba(0, 0, 0, 0.6);
    //         transition: opacity 0.15s linear;
    //       }
    //     </style>
    //     <rx-grid
    //       .$items=${[
    //         html`
    //           <div style="width: 100px">dadada</div>
    //         `,
    //         html`
    //           <div style="width: 200px">dadada</div>
    //         `
    //       ]}
    //     ></rx-grid>
    //   `
    // ).subscribe();

    // this.modalService.openComponent(ImageViewComponent);

    // setTimeout(() => this.modalService.close(), 3000);
  }
}
