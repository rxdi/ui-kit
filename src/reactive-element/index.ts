import { LitElement } from '@rxdi/lit-html';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class State<T> extends LitElement {
  state$: BehaviorSubject<{ data: T }>;
  constructor(v: T) {
    super();
    this.state$ = new BehaviorSubject(v || ({ data: {} } as any));
  }

  select<K>(mapFn: (state: { data: T }) => K): Observable<K> {
    return this.state$.pipe(map(mapFn));
  }

  setState(data: T) {
    this.state$.next({ data });
  }
}

export class ReactiveElement<T> extends State<T> {}
