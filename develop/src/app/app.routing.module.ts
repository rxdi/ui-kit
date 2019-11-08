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
import { AlertViewComponent } from './alert-view/alert-view.component';
import { DescriptionListViewComponent } from './description-list-view/description-list-view.component';
import { DotnavViewComponent } from './dotnav-view/dotnav-view.component';
import { LoadingViewComponent } from './loading-view/loading-view.component';
import { SpinnerViewComponent } from './spinner-view/spinner-view.component';
import { TabsViewComponent } from './tabs-view/tabs-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { DraggableViewComponent } from './draggable-view/draggble-view.component';
import { IntrospectViewComponent } from './client-introspect-view/introspect-view.component';
import { PwaInstallViewComponent } from './pwa-install/pwa-install-view.component';

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
        },
        {
          path: '/ui-kit/alert',
          component: AlertViewComponent
        },
        {
          path: '/ui-kit/description',
          component: DescriptionListViewComponent
        },
        {
          path: '/ui-kit/dotnav',
          component: DotnavViewComponent
        },
        {
          path: '/ui-kit/loading',
          component: LoadingViewComponent
        },
        {
          path: '/ui-kit/spinner',
          component: SpinnerViewComponent
        },
        {
          path: '/ui-kit/tabs',
          component: TabsViewComponent
        },
        {
          path: '/ui-kit/table',
          component: TableViewComponent
        },
        {
          path: '/ui-kit/draggable',
          component: DraggableViewComponent
        },
        {
          path: '/ui-kit/introspect',
          component: IntrospectViewComponent
        },
        {
          path: '/ui-kit/pwa',
          component: PwaInstallViewComponent
        },
      ],
      { log: true, baseUrl: '/ui-kit' }
    )
  ]
})
export class AppRoutingModule {}
