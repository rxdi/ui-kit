
# Article Component

Pull request: https://github.com/rxdi/ui-kit/pull/12

##### Usage

```typescript
import { ArticleComponent } from '@rxdi/ui-kit/article';

@Module({
  components: [
    ArticleComponent
  ],
})
export class AppModule {}
```

```html
<rx-article
  .data=${{
    heading: html``,
    meta: html``,
    lead: html``,
    information: html``,
    section: html``
  }}
></rx-article>
```

```typescript
import { Component, LitElement, html, css } from '@rxdi/lit-html';
import { ModalService } from '@rxdi/ui-kit/modal';
import { Inject } from '@rxdi/core';
import { ArticleData } from './data';

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
```

##### ArticleData

```typescript
import { html } from '@rxdi/lit-html';
import { ArticleViewComponent } from '@rxdi/ui-kit/article';

export function ArticleData(this: ArticleViewComponent) {
  return {
    heading: 'My Super Heading',
    meta: html`
      Written by <a>Super User</a> on 12 April 2012. Posted in
      <a>Blog</a>
    `,
    information: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
      `,
    lead: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip.
    `,
    section: html`
      <div @click=${() => this.openModalArticle()}>Read more</div>
      <div style="margin-left: 15px;">5 Comments</div>
    `
  };
}
```


##### Article `data` interface

```typescript
import { TemplateResult } from '@rxdi/lit-html';

export interface Article {
  heading: TemplateResult | string;
  meta: TemplateResult | string;
  lead: TemplateResult | string;
  information: TemplateResult | string;
  section: TemplateResult | string;
}
```