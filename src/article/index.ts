import { ArticleComponent } from './article.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-article': ArticleComponent;
  }
}

export * from './article.component';
