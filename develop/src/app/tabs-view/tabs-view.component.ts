import { LitElement, Component, html, css } from '@rxdi/lit-html';

@Component({
  selector: 'tabs-view-component',
  style: css`
    .container {
      margin: 0px auto;
      padding: 50px;
      background-color: white;
      text-align: center;
      user-select: none;
    }
    h3 {
      color: #333;
    }
  `,
  template(this: TabsViewComponent) {
    return html`
      <div class="container">
        <h3>Default</h3>
        <rx-tabs .pages=${this.pages}></rx-tabs>
        <h3>Primary</h3>
        <rx-tabs palette="primary" .pages=${this.pages}></rx-tabs>
        <h3>Secondary</h3>
        <rx-tabs palette="secondary" .pages=${this.pages}></rx-tabs>
        <h3>Warning</h3>
        <rx-tabs palette="warning" .pages=${this.pages}></rx-tabs>
        <h3>Danger</h3>
        <rx-tabs palette="danger" .pages=${this.pages}></rx-tabs>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/tabs/README.md"
      ></markdown-reader>
    `;
  }
})
export class TabsViewComponent extends LitElement {
  pages = [
    {
      name: 'Tab 1',
      view: html`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      `,
      active: true
    },
    {
      name: 'Tab 2',
      view: html`
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur, sed do eiusmod.
      `,
      active: false
    },
    {
      name: html`
        Tab 3
      `,
      view: html`
        dada3
      `,
      active: false
    }
  ];
}
