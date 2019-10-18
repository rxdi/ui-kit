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
