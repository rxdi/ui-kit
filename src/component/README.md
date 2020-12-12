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

const Dependencies = DefineDependencies(CounterService, CounterService2)(Container);

@(Component<{ counter: number }, typeof Dependencies, CounterComponent>({
 selector: 'counter-component',
})(Dependencies)(function (this, [counterService]) {
 return interval(1000).pipe(
  map((value) => ({ counter: this.counter + counterService.counter + value })),
 );
})(
 ([counterService]) =>
  function (this, { counter }) {
   return html`${counter} ${counterService.counter}`;
  },
))
export class CounterComponent extends LitElement {
 @property({ type: Number })
 counter: number;
}

/* 
  <counter-component .counter=${1000}></counter-component>
*/
```
