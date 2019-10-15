import { Module } from '@rxdi/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@rxdi/router';
import { MarkdownReaderModule, MarkdownReaderComponent } from '../../../src/markdown-reader';
import { AccordionComponent } from '../../../src/accordion';
import { RegularMarkdownComponent } from './markdown-reader/markdown-regular.component';
import { ResponsiveViewComponent } from './responsive/responsive.component';
import { AccordionViewComponent } from './accordion-view/accordion-view.component';
import { RxImageComponent } from '../../../src/image';
import { GridComponent } from '../../../src/grid/grid.component';
import { ImageViewComponent } from './image-view/image-view.component';

@Module({
  components: [
    RegularMarkdownComponent,
    AccordionViewComponent,
    AccordionComponent,
    RxImageComponent,
    GridComponent
  ],
  imports: [
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
      ],
      { log: true }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
