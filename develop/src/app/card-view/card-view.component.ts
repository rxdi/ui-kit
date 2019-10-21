import { Component, html, LitElement, css } from '@rxdi/lit-html';
import { ArticleData } from '../article-view/data';

@Component({
  selector: 'card-view',
  style: css`
    .container {
      padding: 50px;
      margin-bottom: 20px;
      background-color: white;
    }
    .margin {
      margin-bottom: 20px;
    }
    .padding {
      padding: 50px;
    }
  `,
  template(this: CardViewComponent) {
    return html`
      <div class="container">
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
export class CardViewComponent extends LitElement {}
