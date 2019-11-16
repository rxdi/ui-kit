import { Component, html, LitElement, css, query } from '@rxdi/lit-html';
import { AnimationComponent } from '../../../../src/animation/animation.component';

/**
 * @customElement animation-view-component
 */
@Component({
  selector: 'animation-view-component',
  style: css`
    :host {
      display: block;
      padding: 50px 200px;
    }

    rx-button {
      transform: translateX(-100%);
    }
    rx-animation {
      margin-top: 300px;
    }
  `,
  template(this: AnimationViewComponent) {
    return html`
      <div class="container">
        <rx-button palette="primary" @click=${() => this.ac.play()}
          >play</rx-button
        >
        <rx-button palette="danger" @click=${() => this.ac.pause()}
          >pause</rx-button
        >
        <rx-button palette="warning" @click=${() => this.ac.restart()}>
          restart
        </rx-button>
        <rx-button palette="primary" @click=${() => this.ac.reverse()}>
          reverse
        </rx-button>
        <p>
          Progress:
        </p>
        <input
          @input=${event =>
            this.ac.seek(this.ac.duration * (event.target.value / 100))}
          type="range"
          step=".001"
          min="0"
          max="100"
          name="xx"
          id="qq"
        />

        <rx-animation .options=${this.options}>
          <rx-button palette="primary">gg</rx-button>
          <rx-button palette="warning">ff</rx-button>
        </rx-animation>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/animation/README.md"
      ></markdown-reader>
    `;
  }
})
export class AnimationViewComponent extends LitElement {
  @query('rx-animation')
  public ac: AnimationComponent;

  private options = () => ({
    duration: 4200,
    keyframes: [
      { translateY: -200 },
      { translateX: 300 },
      { translateY: 0 },
      { translateX: 0 }
    ],
    loop: true,
    easing: 'easeInOutSine'
  })
}
