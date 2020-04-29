import { LitElement, property } from '@rxdi/lit-html';
import { Template } from '@rxdi/ui-kit/decorators';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Template({
  selector: 'template-html-view-component',
  templateUrl: import('./template.html')
})
export class TemplateHtmlViewComponent extends LitElement {
  @property()
  private state = 1;

  @property()
  private pesho = 'gosh222o22';

  private interval = interval(1000).pipe(tap(res => (this.state = res)));
  OnInit() {
    this.interval.subscribe();
  }
}
