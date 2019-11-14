import { LitElement, Component, property } from '@rxdi/lit-html';

@Component({
  selector: 'rx-render'
})
export class RenderComponent extends LitElement {
    @property() t: any;
}
