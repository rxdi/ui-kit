import {
  Component,
  LitElement,
  html,
  property,
  css,
  unsafeCSS
} from '@rxdi/lit-html';
import anime from 'animejs';
import { Options, Overflow } from './interface';
/**
 * @customElement rx-animation
 */
@Component({
  selector: 'rx-animation',
  style: css``,
  template(this: AnimationComponent) {
    return html`
      <style>
        :host {
          display: block;
          overflow: ${unsafeCSS(this.overflow)};
        }
      </style>
      <slot></slot>
    `;
  }
})
export class AnimationComponent extends LitElement {
  get duration() {
    return this.instance.duration;
  }

  private instance: anime.AnimeInstance;

  @property()
  overflow: Overflow = 'hidden';

  @property({ type: Object })
  public options: (anime: Options) => anime.AnimeParams = ({ stagger }) => ({
    delay: stagger(200),
    translateX: 0,
    easing: 'spring(1, 80, 10, 0)'
  })

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
