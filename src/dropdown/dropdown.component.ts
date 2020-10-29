import { html, Component, LitElement, css, property } from '@rxdi/lit-html';
import { fromEvent, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PalettesUnion } from '../settings';
/**
 * @customElement rx-dropdown
 */
@Component({
  selector: 'rx-dropdown',
  style: css`
    .dropbtn {
      background-color: #3498db;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }

    .dropbtn:hover,
    .dropbtn:focus {
      background-color: #2980b9;
    }

    .dropdown {
      position: relative;
      display: inline-block;
      transition: all 0.5s ease;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      min-width: 160px;
      overflow: auto;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown-content .item {
      padding: 12px 16px;

      text-decoration: none;
      display: block;
    }

    .show {
      display: block;
    }
  `,
  template(this: DropdownComponent) {
    return html`
      <style>
        .dropdown-content {
          background-color: var(--${this.palette}-bg-color);
        }
        .dropdown-content .item {
          color: var(--${this.palette}-color);
        }
        .dropdown a:hover {
          background-color: var(--${this.palette}-hover-color);
        }
      </style>
      <div
        class="dropdown"
        @mouseenter=${() => (this.entered = true)}
        @mouseleave=${() => (this.entered = false)}
      >
        <div style="cursor: pointer;" @click=${() => this.onDropdownClicked()}>
          <slot></slot>
        </div>
        ${this.isOpened
          ? html`
              <div class="dropdown-content show">
                <slot name="first-item"></slot>
                ${this.menuItems.map(
                  i =>
                    html`
                      ${i}
                    `
                )}
                <slot name="last-item"></slot>
              </div>
            `
          : ''}
      </div>
    `;
  }
})
export class DropdownComponent extends LitElement {
  @property({ type: Boolean }) isOpened = false;
  @property({ type: String }) palette: PalettesUnion = 'primary';

  @property({ type: Array }) menuItems = [];
  @property({ type: Object }) defaultTemplate = html`
    <button class="dropbtn">
      Dropdown
    </button>
  `;
  private entered: boolean;
  private clickEvent: Observable<Event> = fromEvent(document, 'click').pipe(
    filter(() => !this.entered)
  );

  OnInit() {
    this.clickEvent.subscribe(() => (this.isOpened = false));
  }

  private onDropdownClicked() {
    this.isOpened = !this.isOpened;
    this.dispatchEvent(
      new CustomEvent('buttonClicked', { detail: this.isOpened })
    );
  }
}
