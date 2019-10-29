import { Component, LitElement, html, css } from '@rxdi/lit-html';

@Component({
  selector: 'rx-description-list',
  style: css`
    .container {
      padding: 50px;
      margin: 0px auto;
      background-color: white;
    }
    rx-description.orange::part(description) {
      color: orange;
    }
    rx-description::part(border) {
      /* padding:0px; */
      /* margin: 0px; */
    }
  `,
  template(this: DescriptionListViewComponent) {
    return html`
      <div class="container">
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </rx-description>
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="description">DESCRIPTION TERM</div>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description>
          <div slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </rx-description>
        <rx-description class="orange">
          <div slot="description">DESCRIPTION TERM</div>
        </rx-description>
      </div>
    `;
  }
})
export class DescriptionListViewComponent extends LitElement {}
