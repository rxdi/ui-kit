# @rxdi/ui-kit

# [DEMO](https://rxdi.github.io/ui-kit/)


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
  imports: [
    ReactiveUiModule.forRoot({
      palettes: {
        root: css`
          :root {
            --bp-s: 640px;
            --bp-m: 960px;
            --bp-l: 1200px;
            --bp-xl: 1600px;
          }
        `,
        danger: css`
          :root {
            --danger-bg-color: #f0506e;
            --danger-color: #fff;
            --danger-border: 1px solid transparent;
            --danger-hover-color: #ee395b;
            --danger-active-color: #ec2147;
          }
        `,
        default: css`
          :root {
            --default-bg-color: transparent;
            --default-color: #222;
            --default-border: 1px solid #e5e5e5;
            --default-hover-color: transparent;
            --default-hover-border: 1px solid #999;
          }
        `,
        primary: css`
          :root {
            --primary-bg-color: #1e87f0;
            --primary-color: #fff;
            --primary-border: 1px solid transparent;
            --primary-hover-color: #0f7ae5;
            --primary-active-color: #0e6dcd;
          }
        `,
        secondary: css`
          :root {
            --secondary-bg-color: #222;
            --secondary-color: #fff;
            --secondary-border: 1px solid transparent;
            --secondary-hover-color: #333;
            --secondary-active-color: #000;
          }
        `,
        warning: css`
          :root {
            --warning-bg-color: #faa05a;
            --warning-color: #fff;
            --warning-border: 1px solid transparent;
            --warning-hover-color: #e19457;
            --warning-active-color: #ef9a56;
          }
        `
      }
    }),
  ],
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
* [Button](/src/button/README.md)
* [Article](/src/article/README.md)
* [Divider](/src/divider/README.md)
* [Label](/src/label/README.md)
* [Loading](/src/loading/README.md)
* [Dropdown](/src/dropdown/README.md)
* [Off-canvas-nav](/src/nav/README.md)
* [Card](/src/card/README.md)
* [Progress](/src/progress/README.md)
* [Spinner](/src/spinner/README.md)
* [Close](/src/close/README.md)
* [Alert](/src/alert/README.md)
* [Description List](/src/description-list/README.md)
* [Dotnav](/src/dotnav/README.md)
* [Tabs](/src/tabs/README.md)
* [Table](/src/table/README.md)

### In Progress


* [Align](/src//README.md)
* [Animation](/src//README.md)
* [Background](/src//README.md)
* [Base](/src//README.md)
* [Breadcrumb](/src//README.md)
* [Column](/src//README.md)
* [Comment](/src//README.md)
* [Container](/src//README.md)
* [Countdown](/src//README.md)
* [Cover](/src//README.md)
* [Drop](/src//README.md)
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
* [Leader](/src//README.md)
* [Lightbox](/src//README.md)
* [Link](/src//README.md)
* [List](/src//README.md)
* [Margin](/src//README.md)
* [Marker](/src//README.md)
* [Nav](/src//README.md)
* [Navbar](/src//README.md)
* [Notification](/src//README.md)
* [Overlay](/src//README.md)
* [Padding](/src//README.md)
* [Pagination](/src//README.md)
* [Parallax](/src//README.md)
* [Placeholder](/src//README.md)
* [Position](/src//README.md)
* [Print](/src//README.md)
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



