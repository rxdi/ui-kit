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
    ModalModule.forRoot(),
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
        }
      ],
      { log: true }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
