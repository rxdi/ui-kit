
# Draggable Service

##### Usage

```typescript
import {
  LitElement,
  Component,
  html,
  css,
  queryAll,
  property,
  query,
  classMap
} from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { DraggableService } from '@rxdi/ui-kit/draggable/draggable.service';
import { MultiDrag } from 'sortablejs';

@Component({
  selector: 'draggable-view-component',
  style: css`
    .container {
      background: white;
      color: #666;
    }

    .dropdownArea {
      background-color: green;
      padding: 50px;
      min-height: 60px;
      color: white;
    }
    .dropdownAreaWhenDragged {
      opacity: 0.7;
    }
    rx-button {
      cursor: move;
    }
    .draggable-container {
      min-height: 100px;
    }
    .blue-background-class {
      opacity: 0.5;
    }
    .sortable-selected {
      background: #666;
    }
  `,
  template(this: DraggableViewComponent) {
    return html`
      <div class="container">
        <div class="draggable-container">
          <rx-button palette="primary">
            This element is draggable.
          </rx-button>
          <rx-button palette="danger">
            This element is draggable.
          </rx-button>
          <rx-button palette="warning">
            This element is draggable.
          </rx-button>
          <rx-button palette="primary">
            This element is draggable.
          </rx-button>
          <rx-button palette="danger">
            This element is draggable.
          </rx-button>
          <rx-button palette="warning">
            This element is draggable.
          </rx-button>
          <rx-button palette="primary">
            This element is draggable.
          </rx-button>
          <rx-button palette="danger">
            This element is draggable.
          </rx-button>
          <rx-button palette="warning">
            This element is draggable.
          </rx-button>
        </div>

        <div class="dropdownArea">
          <rx-button palette="danger">dada</rx-button>
          <rx-button palette="danger">dada</rx-button>
          <rx-button palette="danger">dada</rx-button>
          <rx-button palette="danger">dada</rx-button>
        </div>

        <div class="dropdownArea">
          Return area1
        </div>

        <div class="dropdownArea">
          Drop Zone2
        </div>

        <div class="dropdownArea">
          Drop Zone3
        </div>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/draggable/README.md"
      ></markdown-reader>
    `;
  },
  providers: [DraggableService]
})
export class DraggableViewComponent extends LitElement {
  @Inject(DraggableService)
  private draggableService: DraggableService;

  @query('.draggable-container')
  private container: HTMLElement;

  @queryAll('.dropdownArea')
  private targets: HTMLElement[];

  OnUpdateFirst() {
    this.draggableService.setPlugins([MultiDrag]);
    this.draggableService.createSortable(this.container, {
      group: 'shared',
      multiDrag: true,
      ghostClass: 'blue-background-class',
      animation: 150
    });
    this.targets.forEach(target => {
      this.draggableService.createSortable(target, {
        group: 'shared',
        multiDrag: true,
        ghostClass: 'blue-background-class',
        animation: 150
      });
    });
  }
}
```
