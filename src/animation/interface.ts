import {
  AnimeInstance,
  AnimeTimelineInstance,
  StaggerOptions,
  DirectionOptions,
  AnimeCallBack,
  EasingOptions
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

type CustomEasingFunction = (el: HTMLElement, index: number, length: number) => ((time: number) => number);


interface AnimeInstanceParams extends AnimeCallBack {
  loop?: number | boolean;
  autoplay?: boolean;
  direction?: DirectionOptions | string;
}

interface AnimeAnimParams extends AnimeCallBack {
  targets?: AnimeTarget | ReadonlyArray<AnimeTarget>;

  duration?: number | FunctionBasedParameter;
  delay?: number | FunctionBasedParameter;
  endDelay?: number | FunctionBasedParameter;
  elasticity?: number | FunctionBasedParameter;
  round?: number | boolean | FunctionBasedParameter;
  keyframes?: ReadonlyArray<AnimeAnimParams>;

  easing?: EasingOptions | string | CustomEasingFunction | ((el: HTMLElement) => string);

  [AnyAnimatedProperty: string]: any;
}

export interface AnimationOptions {
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
    params?: AnimationParams | ReadonlyArray<AnimeInstance>
  ): AnimeTimelineInstance;
  random(min: number, max: number): number;
}


export type Overflow = 'auto' | 'hidden' | 'inherit' | 'initial' | 'scroll' | 'unset' | 'visible' | '-moz-hidden-unscrollable';

export interface AnimationParams extends AnimeInstanceParams, AnimeAnimParams {
  trigger?: keyof GlobalEventHandlersEventMap;
}
