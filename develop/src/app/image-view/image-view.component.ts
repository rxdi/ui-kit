import { html, Component, LitElement } from '@rxdi/lit-html';
import { GlyphSVG } from '../../../../src/images/glyph.svg';

/**
 * @customElement image-view-component
 */
@Component({
  selector: 'image-view-component',
  template(this: ImageViewComponent) {
    return html`
      <div style="max-width: 200px; background-color: white">
        <rx-image
          image="https://getuikit.com/images/icon-clipboard.svg"
        ></rx-image>
        <rx-image
          .image=${GlyphSVG('70px', '70px')}
          @onLoad=${this.onLoad}
        ></rx-image>
      </div>
      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/image/README.md"
      ></markdown-reader>
    `;
  },
})
export class ImageViewComponent extends LitElement {
  onLoad = (event: CustomEvent<HTMLImageElement>) => {
    console.log(event.target);
  };
}
