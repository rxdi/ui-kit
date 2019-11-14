import { Module } from '@rxdi/core';
import { AccordionComponent } from '../accordion';
import { RxImageComponent } from '../image';
import { GridComponent } from '../grid/grid.component';
import { BadgeComponent } from '../badge/badge.component';
import { ButtonComponent } from '../button/button.component';
import { ArticleComponent } from '../article/article.component';
import { LabelComponent } from '../label/label.component';
import { CardComponent } from '../card/card.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { IfComponent } from '../if/if.component';
import { DividerComponent } from '../divider/divider.component';
import { ProgressComponent } from '../progress/progress.component';
import { CloseComponent } from '../close/close.component';
import { DotnavComponent } from '../dotnav/dotnav.component';
import { LoadingComponent } from '../loading/loading.component';
import { AlertComponent } from '../alert/alert.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TableComponent } from '../table/table.component';
import { PwaInstallComponent } from '../pwa-install/pwa-install.component';
import { AnimationComponent } from '../animation/animation.component';
import { DescriptionListComponent } from '../description-list/description-list.component';
import { MarkdownReaderModule } from '../markdown-reader';

@Module({
  imports: [MarkdownReaderModule],
  components: [
    AccordionComponent,
    RxImageComponent,
    GridComponent,
    BadgeComponent,
    ButtonComponent,
    ArticleComponent,
    DividerComponent,
    LabelComponent,
    DropdownComponent,
    CardComponent,
    ProgressComponent,
    IfComponent,
    CloseComponent,
    AlertComponent,
    DescriptionListComponent,
    DotnavComponent,
    LoadingComponent,
    SpinnerComponent,
    TabsComponent,
    TableComponent,
    PwaInstallComponent,
    AnimationComponent
  ]
})
export class AppComponentsModule {}
