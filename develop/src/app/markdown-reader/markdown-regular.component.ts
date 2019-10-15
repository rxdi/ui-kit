import { Component, html, LitElement, property, css } from '@rxdi/lit-html';
import { style as AppStyle } from '../app.component.css';
import { of } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';
import { style } from './markdown-regular.css';

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
      ></markdown-reader>
    `;
  }
})
export class RegularMarkdownComponent extends LitElement {
  @property() inputLink =
    'https://raw.githubusercontent.com/rxdi/starter-client-lit-html/master/README.md';
  @property() error: boolean;

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
}
