import { Module } from '@rxdi/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@rxdi/router';
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
import { ModalModule } from '../../../src/modal';
import { BadgeViewComponent } from './badge-view/badge-vew.component';
import { css } from '@rxdi/lit-html';
import { ModalViewComponent } from './modal/modal-view.component';

@Module({
  components: [
    RegularMarkdownComponent,
    AccordionViewComponent,
    AccordionComponent,
    RxImageComponent,
    GridComponent,
    BadgeComponent
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
            --default-border-color: 1px solid #e5e5e5;
          }
        `,
        primary: css`
          :root {
            --primary-bg-color: #1e87f0;
            --primary-color: #fff;
            --primary-border-color: 1px solid transparent;
          }
        `,
        secondary: css`
          :root {
            --secondary-bg-color: #222;
            --secondary-color: #fff;
            --secondary-border-color: 1px solid transparent;
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
        }
      ],
      { log: true }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
