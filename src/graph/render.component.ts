import {
  LitElement,
  Component,
  property,
  TemplateResult
} from '@rxdi/lit-html';
import { ObservableContainer } from '@rxdi/core/dist/container/observable-interface';

/**
 * @customElement rx-render
 */
@Component({
  selector: 'rx-render'
})
export class RenderComponent extends LitElement {
  @property({ type: Object }) state: <T>(
    state: T,
    ctx?: ObservableContainer
  ) => TemplateResult;
}
