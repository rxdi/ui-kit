import { LitElement, Component, property } from '@rxdi/lit-html';

/**
 * @customElement rx-style
 */
@Component({
  selector: 'rx-style'
})
export class StyleComponent extends LitElement {
  @property() value: any;
}
