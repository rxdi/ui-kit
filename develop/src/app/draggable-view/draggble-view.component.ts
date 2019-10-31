import {
  LitElement,
  Component,
  html,
  css,
  queryAll,
  property
} from '@rxdi/lit-html';
import interact from 'interactjs';
import { Inject } from '@rxdi/core';
import { DraggableService } from '@rxdi/ui-kit/draggable/draggable.service';
import { switchMap, map } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'draggable-view-component',
  style: css`
    .container {
      background: white;
      color: #666;
    }
    #grid-snap {
      width: 40%;
      background-color: #29e;
      color: #fff;
      font-size: 1.2em;
      border-radius: 4px;
      padding: 2%;
      margin: 5%;
      touch-action: none;
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
    #container {
      min-height: 100px;
    }
  `,
  template(this: DraggableViewComponent) {
    return html`
      <div class="container">
        <div id="container">
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

        <div class="dropdownArea">
          Return area1
        </div>

        <div class="dropdownArea">
          Drop Zone2
        </div>

        <div class="dropdownArea">
          Drop Zone3
        </div>

        <div id="grid-snap">
          ${this.droppedItem}
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
  @Inject(DraggableService) private draggableService: DraggableService;

  @queryAll('rx-button') private els: HTMLElement[];
  @queryAll('.dropdownArea') private targets: HTMLElement[];

  @property()
  droppedItem;

  OnUpdateFirst() {
    this.customDropArea(this.els);
    this.getElement();
  }

  customDropArea(elements: HTMLElement[]) {
    elements.forEach((e, i) => {
      const events = this.draggableService.draggableElement(e, {
        myCustomElement: i
      });
      events.dragstart.subscribe();
      events.dragend.subscribe();
      events.drag.subscribe();
    });
    this.targets.forEach((t, i) => {
      this.draggableService
        .createDropArea(t, { style: 'dropdownAreaWhenDragged' })
        .pipe(map(
          (data) =>
            (this.droppedItem = html`
            <p>Item: ${data.target.tagName}</p>
            <p>Palette: ${data.target['palette']}</p>
              ${t.cloneNode(true)}
            `)
        ),
        )
        .subscribe();
    });

    this.draggableService
      .createDropArea(this.shadowRoot.getElementById('container'))
      .subscribe(
        data =>
          (this.droppedItem = html`
            Initial container ${data.metadata.myCustomElement}
          `)
      );
  }

  getElement() {
    const element = this.shadowRoot.querySelector('#grid-snap');
    let x = 0;
    let y = 0;

    interact(element as any)
      .draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: [
              interact.createSnapGrid({
                x: 20,
                y: 20
              })
            ],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }]
          }),
          interact.modifiers.restrict({
            restriction: element.parentNode as any,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
            endOnly: true
          })
        ],
        inertia: true
      })
      .on('dragmove', function(event) {
        x += event.dx;
        y += event.dy;

        event.target.style.webkitTransform = event.target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';
      });
  }
}

//   target.setAttribute(
//     'style',
//     `transform: translate(${e.clientX}px, ${e.clientY}px); cursor: move;`
//   );
//   target.remove()
