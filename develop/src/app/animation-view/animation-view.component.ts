import { Component, html, LitElement, css, query, async } from '@rxdi/lit-html';
import { AnimationComponent } from '../../../../src/animation/animation.component';
import { AnimationParams } from '@rxdi/ui-kit/animation/interface';
import { BehaviorSubject, of } from 'rxjs';

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

    rx-animation {
      background-color: whitesmoke;
      margin: 0;
      width: 407px;
      height: 240px;
      display: flex;
      border-radius: 4px;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    h2 {
      background-color: #333;
      padding: 8px;
      border-radius: 4px;
    }
  `,
  template(this: AnimationViewComponent) {
    return html`
      <div class="container">
        <rx-button palette="primary" @click=${() => this.ac.play()}>
          play
        </rx-button>
        <rx-button palette="danger" @click=${() => this.ac.pause()}>
          pause
        </rx-button>
        <rx-button palette="warning" @click=${() => this.ac.restart()}>
          restart
        </rx-button>
        <rx-button palette="primary" @click=${() => this.ac.reverse()}>
          reverse
        </rx-button>

        <p>
          Progress:
          <input
            @input=${event =>
              this.ac.seek(this.ac.duration * (event.target.value / 100))}
            type="range"
            step=".001"
            min="0"
            max="100"
            name="xx"
            id="qq"
            .value="${async(this.progress$)}"
          />
        </p>

        <rx-animation
          @progress=${({ detail }) => this.progress$.next(detail.progress)}
          .options=${this.options}
          @loop-begin=${({ detail }) => console.log('begin', detail)}
          @loop-completed=${({ detail }) => console.log('completed', detail)}
        >
          <h2 animate="false">${async(this.progress$)}</h2>
          <rx-button
            style="
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                  "
            palette="primary"
          >
            start
          </rx-button>
        </rx-animation>
      </div>
      <br>
      <br>
      <br>
      <div>
        <rx-animation .options=${this.options2} style="background: var(--warning-bg-color)">
          <rx-for
            .of=${Array.from({ length: 60 }, (_, i) => ({ position: i }))}
          >
            <rx-let
            style="display: grid; grid-template-columns: repeat(10, 1fr);"
              .item=${i =>
                html`
                  <p style="opacity: 0; text-align: center; padding: 10px; margin: 0">${i.position}</p>
                `}
            ></rx-let>
          </rx-for>
        </rx-animation>
      </div>
      <!-- <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/animation/README.md"
      ></markdown-reader> -->
    `;
  }
})
export class AnimationViewComponent extends LitElement {
  @query('rx-animation')
  public ac: AnimationComponent;

  private progress$ = new BehaviorSubject(0);

  private options = () =>
    ({
      duration: 5000,
      keyframes: [
        { translateY: -200 },
        { translateX: 300 },
        { translateY: 0 },
        { translateX: 0 }
      ],
      loop: false,
      easing: 'easeInOutSine',
      trigger: 'mouseover'
    } as AnimationParams);

    private options2 = ({ stagger }) => ({
      delay: stagger(50),
      opacity: 1,
      trigger: 'click',
      direction: 'alternate',
    } as AnimationParams)
}
