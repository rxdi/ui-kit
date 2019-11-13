import {
  AnimeParams,
  AnimeInstance,
  AnimeTimelineInstance,
  StaggerOptions
} from 'animejs';

export type AnimeTarget =
  | string
  | object
  | HTMLElement
  | SVGElement
  | NodeList
  | null;
export type FunctionBasedParameter = (
  element: HTMLElement,
  index: number,
  length: number
) => number;

export interface Options {
  bezier(x1: number, y1: number, x2: number, y2: number): (t: number) => number;
  stagger(
    value: number | string | ReadonlyArray<number | string>,
    options?: StaggerOptions
  ): FunctionBasedParameter;
  set(
    targets: AnimeTarget,
    value: { [AnyAnimatedProperty: string]: any }
  ): void;
  timeline(
    params?: AnimeParams | ReadonlyArray<AnimeInstance>
  ): AnimeTimelineInstance;
  random(min: number, max: number): number;
}


export type Overflow = 'auto' | 'hidden' | 'inherit' | 'initial' | 'scroll' | 'unset' | 'visible' | '-moz-hidden-unscrollable';
