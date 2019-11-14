import { LitElement, Component, property } from '@rxdi/lit-html';
import { createUniqueHash } from '@rxdi/core';
/**
 * @customElement rx-fetch
 */
@Component({
  selector: 'rx-fetch'
})
export class FetchComponent extends LitElement {
  @property() query: string;
  @property() mutate: string;
  @property() subscribe: string;
}
