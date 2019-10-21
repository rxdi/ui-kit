import {
  html,
  Component,
  OnUpdate,
  unsafeHTML,
  property,
  LitElement,
  queryAll
} from '@rxdi/lit-html';
import { style } from './markdown-reader.component.css';
import { Inject } from '@rxdi/core';
import { MarkdownParserService } from '../markdown.service';
import { MarkdownParserMenuProvider } from '../markdown-menu.provider';
import { UIPackageRouteParams } from './markdown-reader.component.interface';
import { ResponsiveService } from '../../services';
import { tap } from 'rxjs/operators';

/**
 * @customElement markdown-reader
 */
@Component({
  selector: 'markdown-reader',
  style,
  template(this: MarkdownReaderComponent) {
    return html`
      ${!this.disableTocComponent
        ? html`
            <toc-component src=""></toc-component>
          `
        : ''}
      ${!this.html
        ? html`
            <loading-screen-component></loading-screen-component>
          `
        : ''}
      ${this.html
        ? html`
            <div class="container">
              ${unsafeHTML(this.html)}
            </div>
          `
        : ''}
    `;
  }
})
export class MarkdownReaderComponent extends LitElement implements OnUpdate {
  @property() private html = '';
  @property({ type: Boolean }) disableTocComponent: boolean;
  @property() link: string;
  @property() namespace: string;
  @property() repo: string;
  @property() filePath: string;
  @property() markdownReaderJSON: string;

  @Inject(MarkdownParserService)
  private mdParser: MarkdownParserService;

  @Inject(MarkdownParserMenuProvider)
  private mdParserMenu: MarkdownParserMenuProvider;

  @Inject(ResponsiveService)
  private responsive: ResponsiveService;

  @queryAll('code')
  private tags: NodeListOf<HTMLElement>[];

  private widthHeight = this.responsive.combineBoth();

  OnInit() {
    this.widthHeight
      .pipe(
        tap(({ width }) => {
          if (width < 600) {
            this.disableTocComponent = true;
          } else {
            this.disableTocComponent = false;
          }
        })
      )
      .subscribe();
  }

  async OnUpdate() {
    const params = this.getRouteParams();
    // const res = await this.mdParser.fetchDefinitions('https://raw.githubusercontent.com/rxdi/ui-components/master/gapi-cli.conf.yml');
    await this.fetch(params.namespace, params.repo, params.filePath);
    this.mdParser.highlightElements(this.tags);
    this.mdParserMenu.lookupHeadings(this.shadowRoot);
  }

  private getRouteParams(): UIPackageRouteParams {
    let params: UIPackageRouteParams = {} as any;
    if (this['location']) {
      params = this['location'].params;
    }
    return {
      namespace: params.namespace || this.namespace,
      repo: params.repo || this.repo,
      filePath: params.filePath || this.filePath
    };
  }

  async fetch(
    namespace: string = 'rxdi',
    repo: string = 'starter-client-lit-html',
    filePath: string = 'README.md'
  ) {
    try {
      this.html = await this.mdParser.fetchMarkdown(
        this.link ||
          `https://raw.githubusercontent.com/${namespace}/${repo}/master/${filePath}`
      );
    } catch (e) {
      this.dispatchEvent(
        new CustomEvent('onError', {
          detail: e
        })
      );
    }
    this.dispatchEvent(
      new CustomEvent('onSuccess')
    );
  }
}
