import { State } from '../reactive-element/state';
import { Observable } from 'rxjs';

export function useState<T>(
  state: T
): [Observable<T>, (data: T) => void, () => T] {
  const { state$, setState, getState } = new State(state);
  return [state$, setState, getState];
}
