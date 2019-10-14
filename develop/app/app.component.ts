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
      <a href="/"
        ><button class="button">Markdown Link</button>
      </a>
      <a href="/markdown-reader/rxdi/ui-components/README.md"
        ><button class="button">Markdown Route Params</button>
      </a>
      <a href="/responsive"
        ><button class="button">Responsive Service</button>
      </a>
    </div>
    <router-outlet></router-outlet>
  `,
  container: document.body
})
export class AppComponent extends HTMLElement {}
