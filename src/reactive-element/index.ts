import { LitElement } from '@rxdi/lit-html';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class ReactiveElement<T> extends LitElement {
  private state: BehaviorSubject<T>;
  constructor(v: T) {
    super();
    this.state = new BehaviorSubject(v || ({} as any));
  }
  get state$() {
    return this.state.asObservable();
  }

  select = <K>(mapFn: (state: T) => K): Observable<K> => {
    return this.state.pipe(map(mapFn));
  }

  setState = (data: T) => {
    this.state.next({ ...this.state.getValue(), ...data });
  }

  getState = () => {
    return this.state.getValue();
  }
}
