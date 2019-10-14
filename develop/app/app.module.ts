import { Module } from '@rxdi/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@rxdi/router';
import {
  MarkdownReaderModule,
  MarkdownReaderComponent,
} from '../../../src/markdown-reader';

import { RegularMarkdownComponent } from './markdown-reader/markdown-regular.component';
import { ResponsiveViewComponent } from './responsive/responsive.component';

@Module({
  components: [RegularMarkdownComponent],
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
          component: ResponsiveViewComponent
        }
      ],
      { log: true }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
