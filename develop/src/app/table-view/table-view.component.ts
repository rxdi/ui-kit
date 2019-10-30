import {
  LitElement,
  Component,
  html,
  css,
  query,
  OnUpdateFirst
} from '@rxdi/lit-html';
import { Animations, animateElement } from '../../../../src/styles/animations';
import { DATA } from './data';

/**
 * @customElement table-view-component
 */
@Component({
  selector: 'table-view-component',
  style: css`
    ${Animations}
    .container {
      margin: 0px auto;
      padding: 50px;
      text-align: center;
      user-select: none;
    }
  `,
  template(this: TableViewComponent) {
    return html`
      <div class="container">
        <rx-table
          .columns=${['Country', 'Events', 'Time', 'Fees', 'МЯУ', 'МЯУ2']}
          .data=${DATA}
        ></rx-table>
      </div>
    `;
  }
})
export class TableViewComponent extends LitElement implements OnUpdateFirst {
  @query('div')
  private container: HTMLElement;

  OnUpdateFirst() {
    animateElement(this.container, 'bounceInDown');
  }
}
