import {
  Component,
  html,
  LitElement,
  property,
  css,
  query
} from '@rxdi/lit-html';
import { style as AppStyle } from '../app.component.css';
import { of, combineLatest, fromEvent } from 'rxjs';
import { map, tap, debounceTime, switchMap, filter } from 'rxjs/operators';
import { style } from './markdown-regular.css';
import {
  MarkdownReaderComponent,
  MarkdownParserService
} from '../../../../src/markdown-reader';
import { Inject } from '@rxdi/core';

/**
 * @customElement regular-markdown-component
 */
@Component({
  selector: 'regular-markdown-component',
  style: css`
    ${AppStyle}
    ${style}
  `,
  template(this: RegularMarkdownComponent) {
    return html`
      <div class="input-container">
        <div class="input-group ${this.error ? 'error' : ''}">
          <label>Password *</label>
          <input
            type="text"
            .value="${this.inputLink}"
            @input="${this.changeText}"
          />
          <div class="error-message">${this.error}</div>
        </div>
      </div>

      <markdown-reader
        @onError=${e => this.onError(e)}
        link=${this.inputLink}
        @onSuccess=${() => {
          Array.from(
            Array.from(this.reader.shadowRoot.children)[1].querySelectorAll(
              '.language-typescript'
            )
          ).forEach((item, index) => {
            fromEvent(item, 'click')
              .pipe(
                map(
                  () => this.markdown.getCacheCopy.get(this.inputLink)[index]
                ),
                filter(res => !!res),
                switchMap(res => this.copy(res))
              )
              .subscribe();
          });
        }}
      ></markdown-reader>
    `;
  }
})
export class RegularMarkdownComponent extends LitElement {
  @property() inputLink =
    'https://raw.githubusercontent.com/rxdi/starter-client-lit-html/master/README.md';
  @property({ type: Boolean }) error: boolean;

  @query('markdown-reader') reader: MarkdownReaderComponent;
  @Inject(MarkdownParserService) markdown: MarkdownParserService;

  changeText(event) {
    this.error = false;
    return of(event.target)
      .pipe(
        map(t => t.value),
        debounceTime(1000),
        tap(v => (this.inputLink = v))
      )
      .subscribe(stream => {
        console.log(stream);
      });
  }

  onError(e) {
    this.error = e.detail.message;
  }

  copy(v: string) {
    return of(v).pipe(
      map(value => {
        const el = document.createElement('input');
        el.value = value;
        this.shadowRoot.appendChild(el);
        return el;
      }),
      switchMap(el => combineLatest(of(el), this.requestUpdate())),
      tap(([el]) => {
        el.select();
        document.execCommand('copy');
        el.remove();
      })
    );
  }
}
