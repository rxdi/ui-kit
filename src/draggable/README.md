
# Draggable Service


##### Usage

```typescript
    const events = this.draggableService.draggableElement(this.shadowRoot.getElementById('container'), {
        myCustomElement: i
      });
      events.dragstart.subscribe();

    this.draggableService
        .createDropArea(this.shadowRoot.getElementById('drop-area'))
        .subscribe(data => console.log(`Target ${i}`, data.metadata));

    this.draggableService
      .createDropArea(this.shadowRoot.getElementById('initial-container'))
      .subscribe(data => console.log('Initial', data.metadata));
```


```typescript
import { LitElement, Component, html, css, queryAll } from '@rxdi/lit-html';
import interact from 'interactjs';
import { Inject, Container } from '@rxdi/core';
import { DraggableService } from './draggable.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'draggable-view-component',
  style: css`
    .container {
      background: white;
      color: #666;
    }
    .draggableArea {
      background-color: green;
      padding: 50px;
      color: white;
    }
    .target {
      opacity: 0.7;
    }
    rx-button {
      cursor: move;
    }
    #container {
      min-height: 50px;
    }
  `,
  template(this: DraggableViewComponent) {
    return html`
      <div class="container">
        <div id="initial-container">
          <rx-button palette="primary" draggable="true">
            This element is draggable.
          </rx-button>
          <rx-button palette="danger" draggable="true">
            This element is draggable.
          </rx-button>
          <rx-button palette="warning" draggable="true">
            This element is draggable.
          </rx-button>
          <rx-button palette="primary" draggable="true">
            This element is draggable.
          </rx-button>
          <rx-button palette="danger" draggable="true">
            This element is draggable.
          </rx-button>
          <rx-button palette="warning" draggable="true">
            This element is draggable.
          </rx-button>
          <rx-button palette="primary" draggable="true">
            This element is draggable.
          </rx-button>
          <rx-button palette="danger" draggable="true">
            This element is draggable.
          </rx-button>
          <rx-button palette="warning" draggable="true">
            This element is draggable.
          </rx-button>
        </div>

        <div class="draggableArea">
          Return area1
        </div>

        <div class="draggableArea">
          Drop Zone2
        </div>

        <div class="draggableArea">
          Drop Zone3
        </div>

      </div>
    `;
  },
  providers: [DraggableService]
})
export class DraggableViewComponent extends LitElement {
  @Inject(DraggableService)
  private draggableService: DraggableService;

  @queryAll('rx-button')
  private els: HTMLElement[];

  @queryAll('.draggableArea')
  private targets: HTMLElement[];

  OnUpdateFirst() {
    this.els.forEach((e, i) => {
      this.draggableService.draggableElement(e, {
        myCustomElement: i
      }).dragstart.subscribe();
    });
    this.targets.forEach((t, i) => {
      this.draggableService
        .createDropArea(t)
        .subscribe(data => console.log(`Target ${i}`, data.metadata));
    });

    this.draggableService
      .createDropArea(this.shadowRoot.getElementById('initial-container'))
      .subscribe(data => console.log('Initial', data.metadata));
  }

}
```
