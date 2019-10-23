import { Module } from '@rxdi/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@rxdi/router';
import { MarkdownReaderModule, MarkdownReaderComponent } from '../../../src/markdown-reader';
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
import { ArticleComponent } from '../../../src/article/article.component';
import { LabelComponent } from '../../../src/label/label.component';
import { CardComponent } from '../../../src/card/card.component';
import { DropdownComponent } from '../../../src/dropdown/dropdown.component';
import { ModalModule } from '../../../src/modal';
import { BadgeViewComponent } from './badge-view/badge-vew.component';
import { ModalViewComponent } from './modal/modal-view.component';
import { ButtonViewComponent } from './button-view/button-view.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { DividerViewComponent } from './divider-view/divider-view.component';
import { DividerComponent } from '../../../src/divider/divider.component';
import { LabelViewComponent } from './label-view/label-view.component';
import { DropDownViewComponent } from './dropdown-view/dropdown-view.component';
import { NavModule } from '../../../src/nav';
import { NavViewComponent } from './nav-view/nav-view.component';
import { NavComponent } from './nav-view/nav-component';
import { CardViewComponent } from './card-view/card-view.component';
import { FormsViewComponent } from './forms/forms-view.component';
import { ProgressViewComponent } from './progress-view/progress-view.component';
import { ProgressComponent } from '../../../src/progress/progress.component';

@Module({
  components: [
    RegularMarkdownComponent,
    AccordionViewComponent,
    AccordionComponent,
    RxImageComponent,
    GridComponent,
    BadgeComponent,
    ButtonComponent,
    ArticleComponent,
    DividerComponent,
    LabelComponent,
    DropdownComponent,
    NavComponent,
    CardComponent,
    ProgressComponent
  ],
  imports: [
    ModalModule.forRoot({
      backdropClose: true
    }),
    ReactiveUiModule.forRoot(),
    MarkdownReaderModule,
    NavModule.forRoot(),
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
