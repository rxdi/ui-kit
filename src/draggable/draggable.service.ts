import { Injectable } from '@rxdi/core';
import { of } from 'rxjs';
import Sortable, { SortableOptions as SO, MultiDrag } from 'sortablejs';

interface SortableOptions extends SO {
  multiDrag?: boolean;
  plugins?: any[];
}
@Injectable()
export class DraggableService {
  setPlugins(plugins: any[]) {
    plugins.forEach(plugin => Sortable.mount(new plugin()));
  }

  createSortable(
    target: HTMLElement,
    options: SortableOptions = {} as SortableOptions
  ) {
    return of(Sortable.create(target, options));
  }
}
