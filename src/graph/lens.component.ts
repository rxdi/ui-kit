import { LitElement, Component, property } from '@rxdi/lit-html';

/**
 * @customElement rx-lens
 */
@Component({
  selector: 'rx-lens'
})
export class LensComponent extends LitElement {
  @property({ type: String }) match = '';
  @property({ type: Object }) ray: <T>(res: T) => T = (res) => res;
}
