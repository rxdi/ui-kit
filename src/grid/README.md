
# Grid Component

Pull request: https://github.com/rxdi/ui-kit/pull/4

##### Usage

```typescript
import { html, Component, LitElement } from '@rxdi/lit-html';
import glyph from '@rxdi/ui-kit/images/glyph.svg';

/**
 * @customElement image-view-component
 */
@Component({
  selector: 'image-view-component',
  template(this: ImageViewComponent) {
    return html`
      <flex-grid
        .$items=${[
          html`
            <div>
              <h1 style="font-size: 2.75em; font-weight: 700; width: 400px; line-height: 1.25em;">
                Your Open-Source Scalable Cloud Solution
              </h1>
              <div style="height:20px;"></div>
              <h2>Get the latest from Graphql Server</h2>
              <p>Receive news, announcements, and more.</p>
            </div>
          `,
          html`
            <div style="width: 596px;">Working</div>
          `,
        ]}
      >
      </flex-grid>
    `;
  }
})
export class ImageViewComponent extends LitElement {}
```



# Iterate over Observable or Promise items

Inside `.template` callback you will have ability to put your template. This callback will stop for every item provided inside `.$items` attribute

```typescript
import { html, Component, LitElement } from '@rxdi/lit-html';

/**
 * @customElement flex-grid-view-component
 */
@Component({
  selector: 'flex-grid-view-component',
  template(this: FlexGridViewComponent) {
    return html`
      <flex-grid .$items=${[]} .template=${item => html``}></flex-grid>
    `;
  }
})
export class FlexGridViewComponent extends LitElement {}
```


##### Advanced Usage

```typescript
import { html, Component, LitElement, css } from '@rxdi/lit-html';

import RedRock from './red-rock.png';
import BlueWater from './blue-water.png';
import Atmosphere from './plant-with-athmosphear.png';

interface PricingTemplate {
  title: string;
  subTitle: string;
  slogan: string;
  button: string;
  buttonColor: string;
  image: string;
  slogan_two?: string;
}

/**
 * @customElement pricing-component
 */
@Component({
  selector: 'pricing-component',
  template(this: PricingComponent) {
    return html`
      <div style="margin-top: 100px; margin-bottom: 80px;">
        <flex-grid
          .$items=${[
            this.getTemplate('open_source'),
            this.getTemplate('pro'),
            this.getTemplate('enterprise')
          ]}
        ></flex-grid>
        <flex-grid
          .$items=${[
            html`
              <h2 style="color:#359eb6; font-style: italic;">Free 7-day trial available in app</h2>
            `,
          ]}
        ></flex-grid>
      </div>
    `;
  },
})
export class PricingComponent extends LitElement {
  getTemplate(type: 'open_source' | 'pro' | 'enterprise') {
    return html`
      <style>
        .cell {
          border-radius: 15px;
          text-align: center;
          padding-top: 0px;
          padding: 35px;
          width: 300px;
          background-image: linear-gradient(red, #1c1f24);
          background: #282d32;
          margin-right: 20px;
          box-shadow: rgba(162, 162, 162, 0.25) 0px 0px 3px, rgba(0, 0, 0, 0.22) 0px 0px 3px;
          margin-bottom: 20px;
          border: 1px solid #3c3c3c;
        }
      </style>
      <div class="cell">
        ${type === 'open_source'
          ? this.getSingleTemplate({
              title: 'Open source',
              slogan: 'Free',
              subTitle: 'For open source and early stage startups and non-comercial use',
              button: 'Download now',
              image: RedRock,
              buttonColor: '#c2492f',
            })
          : ``}
        ${type === 'pro'
          ? this.getSingleTemplate({
              title: 'Pro',
              slogan: '$49/user/yr',
              subTitle: 'For commercial use and additional features',
              button: 'Buy pro',
              image: BlueWater,
              buttonColor: '#359ec0',
            })
          : ``}
        ${type === 'enterprise'
          ? this.getSingleTemplate({
              title: 'Enterprise',
              slogan: '$99/user/yr',
              subTitle: 'For installation on your servers and use behind a firewall',
              button: 'Buy pro',
              image: Atmosphere,
              slogan_two: '10 users maximum',
              buttonColor: '#48b696',
            })
          : ``}
      </div>
    `;
  }

  getSingleTemplate(template: PricingTemplate) {
    return html`
      <h1 style="margin-top:0px;color: ${template.buttonColor}; font-weight: 400">${template.title}</h1>
      <p style="width: 100%; border: 2px solid ${template.buttonColor};"></p>
      <p style="color: #bec0c3">${template.subTitle}</p>
      <img style="width: 220px; height: 220px;" src=${image} />
      <div style="height: 100px;">
        <h1 style="font-weight: 400;color: #b7bab9; margin-top: 0px; margin-bottom: 0px;">${template.slogan}</h1>
        <p style="color: #b7bab9;margin-top:0px; padding-top:0px; margin-bottom: 35px;">${template.slogan_two}</p>
      </div>

      <app-button .color=${template.buttonColor} .text=${template.button}></app-button>
    `;
  }
}
```