import { Component, html, LitElement, css, property } from '@rxdi/lit-html';
import { Article } from './interface';
import { style } from './style';

/**
 * @customElement rx-article
 */
@Component({
  selector: 'rx-article',
  style,
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
