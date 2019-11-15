import {
  LitElement,
  Component,
  property,
  TemplateResult
} from '@rxdi/lit-html';

/**
 * @customElement rx-render
 */
@Component({
  selector: 'rx-render'
})
export class RenderComponent extends LitElement {
  @property({ type: Object }) state: <T>(
    state: T,
    setState?: (res: T) => void
  ) => TemplateResult;
}
