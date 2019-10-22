import { html, Component, LitElement, async } from '@rxdi/lit-html';
import { interval, Subject, BehaviorSubject } from 'rxjs';
import { take, switchMap, map } from 'rxjs/operators';

/**
 * @customElement progress-view-component
 */
@Component({
  selector: 'progress-view-component',
  template(this: ProgressViewComponent) {
    return html`
      <style>
        :host {
          padding: 20px;
          display: block;
        }

        rx-progress {
          margin: 20px 0;
        }
      </style>

      <h3>Progress</h3>
      <h4>Simple</h4>
      <rx-progress value="25" palette="primary"></rx-progress>
      <h4>Rounded</h4>
      <rx-progress value="50" rounded palette="danger"></rx-progress>
      <h4>Height</h4>
      <rx-progress value="75" height="20" palette="warning"></rx-progress>
      <h4>Label</h4>
      <rx-progress value="45" height="20" label palette="primary"></rx-progress>

      <br />

      <h4>Full</h4>
      <rx-progress
        .value="${async(this.progressValue$)}"
        height="12"
        label
        rounded
        palette="primary"
      ></rx-progress>

      <rx-button palette="primary" @click="${this.reset}">reset</rx-button>

      <h4>Circle</h4>
      <rx-progress palette="primary" height="12" .value="${async(this.progressValue$)}" type="circle"></rx-progress>
      <rx-progress palette="danger" height="10" value="25" type="circle"></rx-progress>
      <rx-progress palette="warning" height="8" value="75" type="circle"></rx-progress>

      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/progress/README.md"
      ></markdown-reader>
    `;
  }
})
export class ProgressViewComponent extends LitElement {
  public reset$ = new BehaviorSubject(0);

  public progressValue$ = this.reset$.pipe(
    switchMap(() =>
      interval(100).pipe(
        take(101)
      )
    )
  );

  reset() {
    this.reset$.next(0);
  }

}
