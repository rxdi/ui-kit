import { Injectable, Container } from '@rxdi/core';
import { fromEvent, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

interface Draggable extends DragEvent {
  target: HTMLElement;
}
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    // tslint:disable-next-line:no-bitwise
    const r = Math.random() * 16 | 0;
    // tslint:disable-next-line:no-bitwise
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

@Injectable()
export class DraggableService {
  draggableElement(target: HTMLElement, metadata?: any) {
    return {
      dragstart: this.attachEventListener(target, 'dragstart').pipe(
        tap(e => {
          const uniqueId = uuidv4();
          Container.set(uniqueId, { target, metadata, uniqueId });
          e.dataTransfer.setData('text/plain', uniqueId);
        }),
        map(e => ({ e, target }))
      ),
      dragend: this.attachEventListener(target, 'dragend').pipe(
        tap(() => {
          target.setAttribute('style', `visibility: visible;`);
        }),
        map(e => ({ e, target }))
      ),
      drag: this.attachEventListener(target, 'drag').pipe(
        tap(() => {
          target.setAttribute('style', `visibility: hidden;`);
        }),
        map(e => ({ e, target }))
      )
    };
  }

  private droppableArea<T>(target: HTMLElement) {
    return {
      dragover: this.attachEventListener(target, 'dragover').pipe(
        tap(e => e.preventDefault()),
        map(e => ({ e, target }))
      ),
      dragleave: this.attachEventListener(target, 'dragleave').pipe(
        tap(e => e.preventDefault()),
        map(e => ({ e, target }))
      ),
      drop: this.attachEventListener(target, 'drop').pipe(
        tap(e => e.preventDefault()),
        map(e => ({
          e,
          target,
          destionation: this.getMetadata<{
            target: HTMLElement;
            metadata: T;
            uniqueId: string;
          }>(e)
        })),
        tap(v => Container.remove(v.destionation.uniqueId))
      )
    };
  }

  private getMetadata<T>(e) {
    let data: T = null;
    try {
      data = Container.get<T>(e.dataTransfer.getData('text/plain'));
    } catch (e) {
      data = e;
    }
    return data;
  }

  createDropArea(el: HTMLElement, options: { singleTransfer?: boolean; style: string } = {style: 'target'}) {
    return new Observable<{ target: HTMLElement; metadata: any }>(o => {
      const event = this.droppableArea(el);
      const dragSub = event.dragleave.subscribe(({ target }) => {
        target.classList.remove(options.style);
      });
      const dropOverSub = event.dragover.subscribe(({ e, target }) => {
        target.classList.add(options.style);
        e.dataTransfer.dropEffect = 'move';
      });
      const dropSub = event.drop.subscribe(({ e, target, destionation }) => {
        target.classList.remove(options.style);
        if (destionation.target) {
          target.appendChild(destionation.target);
        }
        o.next(destionation);
        if (options.singleTransfer) {
          o.complete();
        }
      });
      return () => {
        dragSub.unsubscribe();
        dropSub.unsubscribe();
        dropOverSub.unsubscribe();
      };
    });
  }

  private attachEventListener(
    target: HTMLElement,
    event: keyof GlobalEventHandlersEventMap
  ) {
    return fromEvent<Draggable>(target, event);
  }
}
