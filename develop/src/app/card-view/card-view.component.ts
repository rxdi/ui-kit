import { Component, html, LitElement, css } from '@rxdi/lit-html';
import { ArticleData } from '../article-view/data';
import { Inject } from '@rxdi/core';
import { ModalService } from '../../../../src/modal/modal.service';

@Component({
  selector: 'card-view',
  style: css`
    .container {
      max-width: 800px;
      margin-bottom: 20px;
      background-color: white;
    }
    .margin {
      margin-bottom: 20px;
    }
    .padding {
      padding: 50px;
    }

    .padding-30 {
      padding: 30px;
    }
    .flex {
      display: flex;
    }
    .flex div {
      margin-right: 10px;
    }
    .button::part(text) {
      color: white;
    }
    .button-text::part(text) {
      color: black;
    }
    .rx-card::part(card) {
      background-color: #f8f8f8;
    }
    h3 {
      font-size: 24px;
      line-height: 1.4;
      margin: 0 0 20px 0;
      font-weight: 300;
    }
    p {
      line-height: 1.5;
    }
  `,
  template(this: CardViewComponent) {
    return html`
      <div class="container padding">
        <rx-card>
          <div class="margin padding">Default</div>
        </rx-card>
        <rx-card palette="primary">
          <div class="margin padding">Primary</div>
        </rx-card>
        <rx-card palette="secondary">
          <div class="margin padding">Secondary</div>
        </rx-card>
        <rx-card palette="warning">
          <div class="margin padding">Warning</div>
        </rx-card>
        <rx-card palette="danger">
          <div class="margin padding">Danger</div>
        </rx-card>
        <div class="flex margin">
          <div>
            <rx-card palette="secondary">
              <div class="padding-30 padding">
                <h3>Light</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <rx-button class="button">BUTTON</rx-button>
              </div>
            </rx-card>
          </div>
          <div>
            <rx-card class="rx-card" palette="secondary">
              <div class="padding-30 padding">
                <h3 style="color: #222">Light</h3>
                <p style="color: #666">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <rx-button class="button button-text">BUTTON</rx-button>
              </div>
            </rx-card>
          </div>
        </div>
        <rx-card>
          <div class="margin padding">
            <rx-article .data=${ArticleData.call(this)}></rx-article>
          </div>
        </rx-card>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/card/README.md"
      ></markdown-reader>
    `;
  }
})
export class CardViewComponent extends LitElement {
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
