import {
  Component,
  LitElement,
  html,
  property,
  css,
  unsafeCSS
} from '@rxdi/lit-html';
import anime from 'animejs';
import { Overflow } from './interface';
import { Operators } from '../operators/operators';
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
  overflow: Overflow = 'visible';

  @property({ type: Object })
  public options: (anime: anime.AnimeParams | any) => anime.AnimeParams | any = ({ stagger }) => ({
    delay: stagger(200),
    translateX: 0,
    easing: 'spring(1, 80, 10, 0)'
  })

  async OnUpdateFirst() {
    const slot = this.shadowRoot.querySelector('slot');
    const nodes = slot.assignedNodes();
    let targets = nodes.filter(el => el.nodeType === 1);
    const forNode = this.findNode(nodes, 'rx-for') as LitElement;
    if (forNode) {
      const forNodeNodes = forNode.querySelector('rx-let' as Operators);
      await forNodeNodes.requestUpdate();
      targets = Array.from(forNodeNodes.shadowRoot.querySelectorAll('rx-description'));
    }
    const { bezier, stagger, set, timeline, random } = anime;
    this.instance = anime({
      targets,
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

  findNode(nodes: Node[], localName: Operators) {
    const node = nodes.find(
      n =>
        n &&
        n.nextSibling &&
        (n.nextSibling as HTMLElement).localName === localName
    );
    if (node) {
      return node.nextSibling;
    }
    return { value: null };
  }
}
