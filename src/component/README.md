# Strange component representing more functional approach of defining decorators



```typescript
import { Container, Injectable } from '@rxdi/core';
import { html, LitElement, property } from '@rxdi/lit-html';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
class CounterService {
 counter = 55;
}

@Component<{ counter: number }, [CounterService], CounterComponent>({
 selector: 'counter-component',
 di: {
  get: (v) => Container.get(v),
  has: (v) => Container.has(v),
 },
})([CounterService])(function (this, [counterService]) {
 return interval(1000).pipe(
  map((value) => ({ counter: this.counter + counterService.counter + value })),
 );
})(
 ([helloWorld]) =>
  function (this, { counter }) {
   return html`${counter} ${helloWorld.counter}`;
  },
)
export class CounterComponent extends LitElement {
 @property({ type: Number })
 counter: number;
}

/* 
  <counter-component .counter=${1000}></counter-component>
*/

```