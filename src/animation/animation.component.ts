import { Component, LitElement, html, property, css } from '@rxdi/lit-html';
import anime, {
  AnimeParams,
  AnimeInstance,
  AnimeTimelineInstance,
  StaggerOptions
} from 'animejs';

export interface AnimationOptions extends anime.AnimeParams {}
type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null;
type FunctionBasedParameter = (
  element: HTMLElement,
  index: number,
  length: number
) => number;

interface Options {
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

/**
 * @customElement rx-animation
 */
@Component({
  selector: 'rx-animation',
  style: css`
    :host {
      display: block;
    }
  `,
  template(this: AnimationComponent) {
    return html`
      <slot></slot>
    `;
  }
})
export class AnimationComponent extends LitElement {
  @property({ type: Object })
  public options: (anime: Options) => AnimationOptions;

  private instance: anime.AnimeInstance;

  get duration() {
    return this.instance.duration;
  }

  firstUpdated() {
    const children = this.shadowRoot
      .querySelector('slot')
      .assignedNodes()
      .filter(el => el.nodeType === 1);
    const { bezier, stagger, set, timeline, random } = anime;
    this.instance = anime({
      targets: children,
      ...this.options({
        bezier,
        stagger,
        set,
        timeline,
        random
      })
    });
  }

  play() {
    this.instance.play();
  }

  pause() {
    this.instance.pause();
  }

  restart() {
    this.instance.restart();
  }

  reverse() {
    this.instance.reverse();
  }

  seek(time: number) {
    this.instance.seek(time);
  }
}
