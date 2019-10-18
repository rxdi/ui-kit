import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { ModalService } from '../../../../src/modal/modal.service';
import { Inject } from '@rxdi/core';
import { ArticleData } from './data';

/**
 * @customElement article-view-component
 */
@Component({
  selector: 'article-view-component',
  style: css`
    .container {
      background-color: white;
      padding: 50px;
    }
  `,
  template(this: ArticleViewComponent) {
    return html`
      <div class="container">
        <rx-article .data=${ArticleData.call(this)}></rx-article>
      </div>
    `;
  }
})
export class ArticleViewComponent extends LitElement {
  @Inject(ModalService) private modalService: ModalService;
  openModalArticle() {
    this.modalService
      .openCustomModal({
        template: html`
          <rx-article .data=${ArticleData.call(this)}></rx-article>
        `
      })
      .subscribe();
  }
}
