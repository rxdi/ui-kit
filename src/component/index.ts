/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component as OriginalComponent,
  CustomElementConfig,
  html,
  LitElement,
  TemplateResult,
 } from '@rxdi/lit-html';
 import { Observable } from 'rxjs';
 
 export type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
 
 export type Injection = {
  has: <T>(d: T) => boolean;
  get: <T>(d: T) => T;
 };
 
 type Constructor<T = {}> = new (...args: any[]) => T;
 
 type InstanceTypes<T> = {
  [P in keyof T]: T[P] extends Constructor<infer U> ? U : never;
 };
 
 export const DefineDependencies = <T extends Constructor[]>(...deps: T) => (
  injection: Injection,
 ): InstanceTypes<T> => {
  for (const [index, dep] of deps.entries()) {
   Object.defineProperty(deps, index, {
    get: () => (injection && injection.has(dep) ? injection.get(dep) : dep),
   });
  }
  return deps as never;
 };
 
 export type Options = Without<CustomElementConfig<never>, 'template'>;
 export type State<S, D, K> = (this: K, deps: D) => Observable<S> | S | Promise<S>;
 export type Render<S, D, K> = (
  deps: D,
 ) => (this: K, state: S, setState: (s: S) => void) => TemplateResult;
 
 export const Component = <S, D, K extends LitElement = LitElement>(options?: Options) => (
  deps: D = [] as never,
 ) => (state: State<S, D, K>) => (render: Render<S, D, K>) => {
  return OriginalComponent({
   ...options,
   template(this: K) {
    return html`
     <rx-monad>
      <rx-state .value=${state.bind(this).call(this, deps)}></rx-state>
      <rx-render
       .state=${(state: S, setState: (s: S) => void, shadowRoot: ShadowRoot) => {
        this.shadowRoot.append(shadowRoot);
        return render(deps).bind(this).call(this, state, setState, shadowRoot);
       }}
      ></rx-render>
     </rx-monad>
    `;
   },
  });
 };
 