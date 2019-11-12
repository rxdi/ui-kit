import { Component, LitElement, html, property, css } from '@rxdi/lit-html';
import anime from 'animejs';
import { Options } from './interface';

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
  public options: (anime: Options) => anime.AnimeParams;

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
