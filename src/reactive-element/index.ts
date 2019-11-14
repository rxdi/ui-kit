import { LitElement } from '@rxdi/lit-html';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class State<T> extends LitElement {
  private state: BehaviorSubject<{ data: T }>;
  constructor(v: T) {
    super();
    this.state = new BehaviorSubject(v || ({ data: {} } as any));
  }

  get state$() {
    return this.state.asObservable();
  }

  select<K>(mapFn: (state: { data: T }) => K): Observable<K> {
    return this.state.pipe(map(mapFn));
  }

  setState(data: T) {
    this.state.next({ data: { ...this.state.getValue().data, ...data } });
  }

  getState() {
    return this.state.getValue();
  }
}

export class ReactiveElement<T> extends State<T> {}
