
# Article Component

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
        <rx-article
          .data=${{
            heading: 'My Super Heading',
            meta: html`
              Written by <a>Super User</a> on 12 April 2012. Posted in
              <a>Blog</a>
            `,
            lead: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
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
            section: html`
              <div>Read more</div>
              <div style="margin-left: 15px;">5 Comments</div>
            `
          }}
        ></rx-article>
      </div>
    `;
  }
})
export class ArticleViewComponent extends LitElement {}
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