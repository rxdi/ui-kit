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
        },
        {
          path: '/article',
          component: ArticleViewComponent
        },
        {
          path: '/divider',
          component: DividerViewComponent
        },
        {
          path: '/label',
          component: LabelViewComponent
        },
        {
          path: '/dropdown',
          component: DropDownViewComponent
        },
        {
          path: '/nav',
          component: NavViewComponent
        },
        {
          path: '/card',
          component: CardViewComponent
        },
        {
          path: '/forms',
          component: FormsViewComponent
        },
        {
          path: '/progress',
          component: ProgressViewComponent
        }
      ],
      { log: true }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
