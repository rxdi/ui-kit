import { Component, html, LitElement, css, property } from '@rxdi/lit-html';
import { Article } from './interface';

/**
 * @customElement rx-article
 */
@Component({
  selector: 'rx-article',
  style: css`
    .article {
      color: #666;
    }
    .title {
      font-size: 38px;
      line-height: 1.2;
      font-weight: 300;

      text-transform: none;
    }
    a {
      cursor: pointer;
      user-select: none;
    }
    a:hover {
      color: #666;
    }
    h1 a {
      text-decoration: none;
    }

    .article-meta {
      font-size: 14px;
      line-height: 1.4;
      color: #999;
    }
    .text-lead {
      font-size: 24px;
      line-height: 1.5;
      font-weight: 300;
      color: #222;
    }
    .section {
      width: 250px;
      display: flex;
      text-transform: uppercase;
    }
    .section div {
      padding: 0;
      line-height: 1.5;
      background: none;
      color: #222;
      font-size: 14px;
      position: relative;
    }
    .section div:hover {
      cursor: pointer;
    }
    .section div:hover::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom: 1px solid #222;
      transition: right 0.3s ease-out;
    }
  `,
  template(this: ArticleComponent) {
    return html`
      <article class="article">
        <h1 class="title">
          <a>${this.data.heading}</a>
        </h1>
        <p class="article-meta">
          ${this.data.meta}
        </p>
        <p class="text-lead">
          ${this.data.lead}
        </p>
        <p>
          ${this.data.information}
        </p>
        <div class="section">
          ${this.data.section}
        </div>
      </article>
    `;
  }
})
export class ArticleComponent extends LitElement {
  @property({ type: Object }) data: Article = {} as Article;
}
