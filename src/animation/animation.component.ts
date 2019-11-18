import {
  Component,
  LitElement,
  html,
  property,
  css,
  unsafeCSS
} from '@rxdi/lit-html';
import anime from 'animejs';
import { Overflow, AnimationParams } from './interface';
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
  private trigger: keyof GlobalEventHandlersEventMap;
  private listeners: any[];
  private loopBeginCount = 0;
  private loopCompletedCount = 0;

  @property()
  overflow: Overflow = 'visible';

  _aaa;
  @property()
  get playAnimation() {
    return this._aaa;
  }
  set playAnimation(value) {
      this._aaa = value;
      debugger;
      this.instance.play();
  }

  @property({ type: Object })
  public options: ({
    bezier,
    stagger,
    set,
    timeline,
    random
  }) => AnimationParams = () => ({
    autoplay: false
  });

  async OnUpdate() {
    const slot = this.shadowRoot.querySelector('slot');
    const nodes = slot.assignedNodes();
    let targets = nodes.filter(
      (el: any) =>
        el.nodeType === 1 && !(el.getAttribute('animate') === 'false')
    );
    const forNode = this.findNode(nodes, 'rx-for') as LitElement;
    if (forNode) {
      const forNodeNodes = forNode.querySelector('rx-let' as Operators);
      await forNodeNodes.requestUpdate();
      targets = Array.from(forNodeNodes.shadowRoot.children);
    }
    const { bezier, stagger, set, timeline, random } = anime;

    const options = this.options({
      bezier,
      stagger,
      set,
      timeline,
      random
    });

    const autoplay =
      (options.trigger && options.trigger === 'load') || !options.trigger;

    this.instance = anime({
      targets,
      autoplay,
      ...options,
      update: this.OnAnimeUpdate.bind(this),
      begin: this.onAnimeBegin.bind(this),
      complete: this.onAnimeCompleted.bind(this),
      loopBegin: this.onAnimeLoopBegin.bind(this),
      loopComplete: this.onAnimeLoopCompleted.bind(this),
    });

    if (options.trigger && options.trigger !== 'load') {
      this.trigger = options.trigger;
      this.removeListeners();
      this.listeners = targets.map(target => {
        target.addEventListener(options.trigger, this.handleEvent.bind(this));
        return () =>
          target.removeEventListener(
            options.trigger,
            this.handleEvent.bind(this)
          );
      });
    }
  }

  findNode(nodes: Node[], localName: Operators) {
    const node = nodes.find(
      n =>
        n &&
        n.nextSibling &&
        (n.nextSibling as HTMLElement).localName === localName
    );
    return node ? node.nextSibling : null;
  }

  play() {
    this.instance.play();
  }

  pause () {
    this.instance.pause();
  }

  restart() {
    this.loopCompletedCount = 0;
    this.loopBeginCount = 0;
    this.instance.restart();
  }

  reverse() {
    this.instance.reverse();
  }

  seek(time: number) {
    this.instance.seek(time);
  }

  disconnectedCallback() {
    this.instance = null;
    this.removeListeners();
  }

  private onAnimeBegin() {
    this.dispatchEvent(
      new CustomEvent('begin', {
        bubbles: true,
        composed: true,
        cancelable: false
      })
    );
  }

  private onAnimeCompleted() {
    this.dispatchEvent(
      new CustomEvent('completed', {
        bubbles: true,
        composed: true,
        cancelable: false
      })
    );
  }

  private onAnimeLoopBegin() {
    this.dispatchEvent(
      new CustomEvent('loop-begin', {
        detail: { count: this.loopBeginCount++ },
        bubbles: true,
        composed: true,
        cancelable: false
      })
    );
  }


  private onAnimeLoopCompleted() {
    this.dispatchEvent(
      new CustomEvent('loop-completed', {
        detail: { count: this.loopCompletedCount++ },
        bubbles: true,
        composed: true,
        cancelable: false
      })
    );
  }


  private OnAnimeUpdate({ currentTime, progress }) {
    this.dispatchEvent(
      new CustomEvent('progress', {
        detail: { currentTime, progress: Math.round(progress) },
        bubbles: true,
        composed: true,
        cancelable: false
      })
    );
  }

  private handleEvent() {
    if (this.instance.completed) {
      this.play();
    } else {
      this.restart();
    }
  }

  private removeListeners() {
    if (this.listeners) {
      this.listeners.forEach(l => l());
    }
  }
}
