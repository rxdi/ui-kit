/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component as OriginalComponent,
  CustomElementConfig,
  TemplateResult,
  html,
} from '@rxdi/lit-html';
import { Observable } from 'rxjs';

import '../graph/monad.component';

export type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Injection = {
  has: <T>(d: T) => boolean;
  get: <T>(d: T) => T;
};

export function InjectDependencies<T>(deps: T) {
  return (injection: Injection) => {
    for (const [index, dep] of ((deps as any) || []).entries()) {
      Object.defineProperty(deps, index, {
        get: () => (injection && injection.has(dep) ? injection.get(dep) : dep),
      });
    }
    return deps;
  };
}

export type Options = Without<CustomElementConfig<never>, 'template'> & {
  di?: Injection;
};
export type State<S, D, K> = (this: K, deps: D) => Observable<S> | S | Promise<S>;
export type Render<S, D, K> = (
  deps: D
) => (this: K, state: S, setState: (s: S) => void) => TemplateResult;

export const Component = <S, D, K>(options?: Options) => (deps?: D & any) => (
  state: State<S, D, K>
) => (render: Render<S, D, K>) => {
  const injections = InjectDependencies<D>(deps)(options?.di);
  return OriginalComponent({
    ...options,
    style: null,
    template(this: K) {
      return html`
        <rx-monad>
          <rx-state .value=${state.call(this, injections)}></rx-state>
          <rx-style .value=${options?.style}></rx-style>
          <rx-render
            .state=${(state: S, setState: (s: S) => void) =>
              render(injections).call(this, state, setState)}
          ></rx-render>
        </rx-monad>
      `;
    },
  })
};
