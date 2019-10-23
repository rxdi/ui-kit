import { html } from '@rxdi/lit-html';
import { ArticleViewComponent } from './article-view.component';
import { CardViewComponent } from '../card-view/card-view.component';

export function ArticleData(this: ArticleViewComponent | CardViewComponent) {
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
