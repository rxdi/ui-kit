import {
  LitElement,
  Component,
  html,
  css,
  queryAll,
  query
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
    .dropZone {
      background-color: green;
      padding: 50px;
      min-height: 60px;
      border: 1px solid white;
      color: white;
    }
    .dropZoneWhenDragged {
      opacity: 0.7;
    }
    rx-button {
      cursor: move;
    }
    .draggable-container {
      min-height: 100px;
    }
    .blue-background-class {
      opacity: 0.6;
    }
    .sortable-selected {
      opacity: 0.6;
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

        <div class="dropZone"></div>

        <div class="dropZone"></div>

        <div class="dropZone"></div>
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

  @queryAll('.dropZone')
  private targets: HTMLElement[];

  OnUpdateFirst() {
    this.draggableService.setPlugins([MultiDrag]);
    this.draggableService.createSortable(this.container, {
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
