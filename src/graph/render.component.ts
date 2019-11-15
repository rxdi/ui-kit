import {
  LitElement,
  Component,
  property,
  TemplateResult
} from '@rxdi/lit-html';
import { Observable } from 'rxjs';

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
  ) => Promise<TemplateResult> | TemplateResult | Observable<TemplateResult>;
}
