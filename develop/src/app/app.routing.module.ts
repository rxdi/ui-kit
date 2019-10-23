import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';

import { RegularMarkdownComponent } from './markdown-reader/markdown-regular.component';
import { ResponsiveViewComponent } from './responsive/responsive.component';
import { AccordionViewComponent } from './accordion-view/accordion-view.component';

import { ImageViewComponent } from './image-view/image-view.component';
import { BadgeViewComponent } from './badge-view/badge-vew.component';
import { ModalViewComponent } from './modal/modal-view.component';
import { ButtonViewComponent } from './button-view/button-view.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { DividerViewComponent } from './divider-view/divider-view.component';

import { LabelViewComponent } from './label-view/label-view.component';
import { DropDownViewComponent } from './dropdown-view/dropdown-view.component';
import { NavViewComponent } from './nav-view/nav-view.component';

import { CardViewComponent } from './card-view/card-view.component';
import { FormsViewComponent } from './forms/forms-view.component';
import { ProgressViewComponent } from './progress-view/progress-view.component';

import { MarkdownReaderComponent } from '../../../src/markdown-reader';

@Module({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '/',
          redirect: '/ui-kit'
        },
        {
          path: '/ui-kit',
          component: RegularMarkdownComponent
        },
        {
          path: '/ui-kit/markdown-reader/:namespace/:repo/:filePath',
          component: MarkdownReaderComponent
        },
        {
          path: '/ui-kit/responsive',
          component: ResponsiveViewComponent
        },
        {
          path: '/ui-kit/accordion',
          component: AccordionViewComponent
        },
        {
          path: '/ui-kit/image',
          component: ImageViewComponent
        },
        {
          path: '/ui-kit/badge',
          component: BadgeViewComponent
        },
        {
          path: '/ui-kit/modal',
          component: ModalViewComponent
        },
        {
          path: '/ui-kit/button',
          component: ButtonViewComponent
        },
        {
          path: '/ui-kit/article',
          component: ArticleViewComponent
        },
        {
          path: '/ui-kit/divider',
          component: DividerViewComponent
        },
        {
          path: '/ui-kit/label',
          component: LabelViewComponent
        },
        {
          path: '/ui-kit/dropdown',
          component: DropDownViewComponent
        },
        {
          path: '/ui-kit/nav',
          component: NavViewComponent
        },
        {
          path: '/ui-kit/card',
          component: CardViewComponent
        },
        {
          path: '/ui-kit/forms',
          component: FormsViewComponent
        },
        {
          path: '/ui-kit/progress',
          component: ProgressViewComponent
        }
      ],
      { log: true, baseUrl: '/ui-kit' }
    )
  ]
})
export class AppRoutingModule {}
