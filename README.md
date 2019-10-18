# @rxdi/ui-kit



#### Installation

```bash
npm i @rxdi/ui-kit
```

#### Usage

Import `ReactiveUiModule` inside AppModule, this step will inject for us default providers

```typescript
import { Module } from '@rxdi/core';
import { ReactiveUiModule } from '@rxdi/ui-kit';

@Module({
  imports: [
    ReactiveUiModule.forRoot()
  ]
})
export class AppModule {}
```

#### Using Components

```typescript
import { Module } from '@rxdi/core';
import { AppComponent } from './app.component';
import { AccordionComponent } from '@rxdi/ui-kit/accordion';
import { MarkdownReaderComponent } from '@rxdi/ui-kit/markdown-reader';
import { RxImageComponent } from '@rxdi/ui-kit/image';
import { ReactiveUiModule } from '@rxdi/ui-kit';
import { GridComponent } from '@rxdi/ui-kit/grid';
import { BadgeComponent } from '@rxdi/ui-kit/badge';

@Module({
  components: [
    MarkdownReaderComponent,
    AccordionComponent,
    RxImageComponent,
    GridComponent,
    BadgeComponent
  ],
  imports: [ReactiveUiModule.forRoot()],
  bootstrap: [AppComponent]
})
export class AppModule {}
```


## Components

### Ready

* [Loading Screen](/src/loading-screen/README.md)
* [Markdown Reader](/src/markdown-reader/README.md)
* [Accordion](/src/accordion/README.md)
* [Flex-Grid](/src/grid/README.md)
* [Image](/src/image/README.md)
* [Badge](/src/badge/README.md)
* [Modal](/src/modal/README.md)
* [Button](/src//README.md)

### In Progress

* [Alert](/src//README.md)
* [Align](/src//README.md)
* [Animation](/src//README.md)
* [Article](/src//README.md)
* [Background](/src//README.md)
* [Base](/src//README.md)
* [Breadcrumb](/src//README.md)
* [Card](/src//README.md)
* [Close](/src//README.md)
* [Column](/src//README.md)
* [Comment](/src//README.md)
* [Container](/src//README.md)
* [Countdown](/src//README.md)
* [Cover](/src//README.md)
* [Description List](/src//README.md)
* [Divider](/src//README.md)
* [Dotnav](/src//README.md)
* [Drop](/src//README.md)
* [Dropdown](/src//README.md)
* [Filter](/src//README.md)
* [Flex](/src//README.md)
* [Form](/src//README.md)
* [Grid](/src//README.md)
* [Heading](/src//README.md)
* [Height](/src//README.md)
* [Icon](/src//README.md)
* [Iconnav](/src//README.md)
* [Image](/src//README.md)
* [Inverse](/src//README.md)
* [Label](/src//README.md)
* [Leader](/src//README.md)
* [Lightbox](/src//README.md)
* [Link](/src//README.md)
* [List](/src//README.md)
* [Margin](/src//README.md)
* [Marker](/src//README.md)
* [Nav](/src//README.md)
* [Navbar](/src//README.md)
* [Notification](/src//README.md)
* [Off-canvas](/src//README.md)
* [Overlay](/src//README.md)
* [Padding](/src//README.md)
* [Pagination](/src//README.md)
* [Parallax](/src//README.md)
* [Placeholder](/src//README.md)
* [Position](/src//README.md)
* [Print](/src//README.md)
* [Progress](/src//README.md)
* [Scroll](/src//README.md)
* [Scrollspy](/src//README.md)
* [Search](/src//README.md)
* [Section](/src//README.md)
* [Slidenav](/src//README.md)
* [Slider](/src//README.md)
* [Slideshow](/src//README.md)
* [Sortable](/src//README.md)
* [Spinner](/src//README.md)
* [Sticky](/src//README.md)
* [Subnav](/src//README.md)
* [SVG](/src//README.md)
* [Switcher](/src//README.md)
* [Tab](/src//README.md)
* [Table](/src//README.md)
* [Text](/src//README.md)
* [Thumbnav](/src//README.md)
* [Tile](/src//README.md)
* [Toggle](/src//README.md)
* [Tooltip](/src//README.md)
* [Totop](/src//README.md)
* [Transition](/src//README.md)
* [Upload](/src//README.md)
* [Utility](/src//README.md)
* [Video](/src//README.md)
* [Visibility](/src//README.md)
* [Width](/src//README.md)



## Services

* [ResponsiveService](/src/services/responsive/README.md)
* [DynamicCSS](/src/services/dynamic-css/README.md)



