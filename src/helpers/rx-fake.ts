type OBS<T> = (o: Observable<T>) => void | Function;
type FN<T> = (a: T) => void;

export class Subscription<T> {
  o: Map<Function, FN<T>> = new Map();

  unsubscribe() {
    [...this.o.values()].forEach(v => this.o.delete(v));
  }
}

export class Observable<T> extends Subscription<T> {
  fn: OBS<T>;
  init = true;
  constructor(fn?: OBS<T>) {
    super();
    this.fn = fn;
  }

  subscribe(c: FN<T>) {
    this.o.set(c, c);
    if (typeof this.fn === 'function' && this.init) {
      this.fn(this);
      this.init = false;
    }
    return <Subscription<T>>{
      unsubscribe: () => {
        this.o.delete(c);
      }
    };
  }

  complete() {
    this.unsubscribe();
  }

  next(s: T) {
    [...this.o.values()].forEach(f => f(s));
  }
}

export class BehaviorSubject<T> extends Observable<T> {
  v: T;
  constructor(v: T) {
    if (typeof v === 'function') {
      super(v as any);
    } else {
      super(null);
    }
    this.setValue(v);
  }

  private setValue(v: T) {
    this.v = v;
  }

  next(s: T) {
    this.setValue(s);
    super.next(s);
  }

  getValue() {
    return this.v;
  }

  asObservable() {
    return this;
  }
}

export class Subject<T> extends Observable<T> {
  v: T;

  private setValue(v: T) {
    this.v = v;
  }

  next(s: T) {
    this.setValue(s);
    super.next(s);
  }

  asObservable() {
    return this;
  }
}

export function noop() {}
