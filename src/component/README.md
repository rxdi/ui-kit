# Strange component representing more functional approach of defining decorators

```typescript
import { Container, Injectable } from '@rxdi/core';
import { html, LitElement, property } from '@rxdi/lit-html';
import { Component, DefineDependencies } from '@rxdi/ui-kit';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
class CounterService {
  counter = 55;
}
@Injectable()
class CounterService2 {
  counter = 55;
}

const Dependencies = DefineDependencies(
  CounterService,
  CounterService2
)(Container);

@(Component<{ counter: number }, typeof Dependencies, CounterComponent>({
  selector: 'counter-component',
})(Dependencies)(function (this, [counterService]) {
  return interval(1000).pipe(
    map((value) => ({ counter: this.counter + counterService.counter + value }))
  );
})(
  ([counterService]) =>
    function (this, { counter }) {
      return html`${counter} ${counterService.counter}`;
    }
))
export class CounterComponent extends LitElement {
  @property({ type: Number })
  counter: number;
}

/* 
  <counter-component .counter=${1000}></counter-component>
*/
```

#### Functional composition

```ts
const compose = <T, D = []>(selector: string, styles?: CSSResult[], deps?: D) =>
 Component<T, D>({
  selector,
  styles,
 })(deps);

const state = () => interval(1000).pipe(map(() => new Date().getSeconds()));

@(compose<number>('date-component')(state)(() => (date) => date))
export class DateComponent extends LitElement {}

@(compose<number, typeof Dependencies>(
 'date-component2',
 null,
 Dependencies,
)
(([appService]) => state().pipe(map((res) => res)))
(() => (date) => date))
export class DateComponent2 extends LitElement {}

@compose<number>('date-component3')
(state)
(() => (date) => html`${date}`)
export class DateComponent3 extends LitElement {}

```

#### Usage inside DOM
```html
<date-component></date-component>
<date-component2></date-component2>
<date-component3></date-component3>
```
