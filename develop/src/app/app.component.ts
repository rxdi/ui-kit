import { html, Component } from '@rxdi/lit-html';
import { style } from './app.component.css';

/**
 * @customElement app-component
 */
@Component({
  selector: 'app-component',
  style,
  template: () => html`
    <div style="top:0px; background: #1c1f24;z-index: 1000">
      <a href="/"><button class="button">Markdown Link</button> </a>
      <a href="/markdown-reader/rxdi/ui-components/README.md"
        ><button class="button">Markdown Route Params</button>
      </a>
      <a href="/responsive"
        ><button class="button">Responsive Service</button>
      </a>
      <a href="/accordion"><button class="button">Accordion</button> </a>
      <a href="/image"><button class="button">Image</button> </a>
      <a href="/badge"><button class="button">Badge</button> </a>
      <a href="/modal"><button class="button">Modal</button> </a>
      <a href="/button"><button class="button">Button</button> </a>
      <a href="/article"><button class="button">Article</button> </a>
      <a href="/divider"><button class="button">Divider</button> </a>
    </div>
    <router-outlet></router-outlet>
  `,
  container: document.getElementById('app')
})
export class AppComponent extends HTMLElement {}
