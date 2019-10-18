import { Module } from '@rxdi/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@rxdi/router';
import { css } from '@rxdi/lit-html';
import {
  MarkdownReaderModule,
  MarkdownReaderComponent
} from '../../../src/markdown-reader';
import { AccordionComponent } from '../../../src/accordion';
import { RegularMarkdownComponent } from './markdown-reader/markdown-regular.component';
import { ResponsiveViewComponent } from './responsive/responsive.component';
import { AccordionViewComponent } from './accordion-view/accordion-view.component';
import { RxImageComponent } from '../../../src/image';
import { ReactiveUiModule } from '../../../src';
import { GridComponent } from '../../../src/grid/grid.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { BadgeComponent } from '../../../src/badge/badge.component';
import { ButtonComponent } from '../../../src/button/button.component';
import { ModalModule } from '../../../src/modal';
import { BadgeViewComponent } from './badge-view/badge-vew.component';
import { ModalViewComponent } from './modal/modal-view.component';
import { ButtonViewComponent } from './button-view/button-view.component';

@Module({
  components: [
    RegularMarkdownComponent,
    AccordionViewComponent,
    AccordionComponent,
    RxImageComponent,
    GridComponent,
    BadgeComponent,
    ButtonComponent
  ],
  imports: [
    ModalModule.forRoot({
      backdropClose: true,
      style: css`
        .wrapper {
          position: absolute;
          top: 0;
          left: 0;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          width: 100%;
          height: 100%;
        }

        .backdrop {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.5);
          pointer-events: all;
          z-index: 10;
        }

        .content {
          z-index: 20;
          position: absolute;
          /* width: 100%; */
          /* height: 100%; */
          pointer-events: all;
        }
      `
    }),
    ReactiveUiModule.forRoot({
      palettes: {
        default: css`
          :root {
            --default-bg-color: transparent;
            --default-color: #222;
            --default-border: 1px solid #e5e5e5;
            --default-hover-color: transparent;
            --default-hover-border: 1px solid #999;
          }
        `,
        primary: css`
          :root {
            --primary-bg-color: #1e87f0;
            --primary-color: #fff;
            --primary-border: 1px solid transparent;
            --primary-hover-color: #0f7ae5;
            --primary-active-color: #0e6dcd;
          }
        `,
        secondary: css`
          :root {
            --secondary-bg-color: #222;
            --secondary-color: #fff;
            --secondary-border: 1px solid transparent;
            --secondary-hover-color: #333;
            --secondary-active-color: #000;
          }
        `,
        danger: css`
          :root {
            --danger-bg-color: #f0506e;
            --danger-color: #fff;
            --danger-border: 1px solid transparent;
            --danger-hover-color: #ee395b;
            --danger-active-color: #ec2147;
          }
        `
      }
    }),
    MarkdownReaderModule,
    RouterModule.forRoot(
      [
        {
          path: '/',
          component: RegularMarkdownComponent
        },
        {
          path: '/markdown-reader/:namespace/:repo/:filePath',
          component: MarkdownReaderComponent
        },
        {
          path: '/responsive',
          component: ResponsiveViewComponent
        },
        {
          path: '/accordion',
          component: AccordionViewComponent
        },
        {
          path: '/image',
          component: ImageViewComponent
        },
        {
          path: '/badge',
          component: BadgeViewComponent
        },
        {
          path: '/modal',
          component: ModalViewComponent
        },
        {
          path: '/button',
          component: ButtonViewComponent
        }
      ],
      { log: true }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
