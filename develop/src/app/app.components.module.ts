import { Module } from '@rxdi/core';
import { AccordionComponent } from '../../../src/accordion';
import { RxImageComponent } from '../../../src/image';
import { GridComponent } from '../../../src/grid/grid.component';
import { BadgeComponent } from '../../../src/badge/badge.component';
import { ButtonComponent } from '../../../src/button/button.component';
import { ArticleComponent } from '../../../src/article/article.component';
import { LabelComponent } from '../../../src/label/label.component';
import { CardComponent } from '../../../src/card/card.component';
import { DropdownComponent } from '../../../src/dropdown/dropdown.component';
import { IfComponent } from '../../../src/if/if.component';
import { DividerComponent } from '../../../src/divider/divider.component';
import { ProgressComponent } from '../../../src/progress/progress.component';
import { CloseComponent } from '../../../src/close/close.component';
import { DotnavComponent } from '../../../src/dotnav/dotnav.component';
import { LoadingComponent } from '../../../src/loading/loading.component';
import { AlertComponent } from '../../../src/alert/alert.component';
import { SpinnerComponent } from '../../../src/spinner/spinner.component';

import { DescriptionListComponent } from '../../../src/description-list/description-list.component';
import { RegularMarkdownComponent } from './markdown-reader/markdown-regular.component';
import { AccordionViewComponent } from './accordion-view/accordion-view.component';
import { NavComponent } from './nav-view/nav-component';

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
    ProgressComponent,
    IfComponent,
    CloseComponent,
    AlertComponent,
    DescriptionListComponent,
    DotnavComponent,
    LoadingComponent,
    SpinnerComponent
  ]
})
export class AppComponentsModule {}
