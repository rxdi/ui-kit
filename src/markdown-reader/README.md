
# Markdown Parser Component

#### Usage on Client side with @rxdi/lit-html

```typescript
import { Module } from '@rxdi/core';
import { MarkdownParserModule } from '@rxdi/ui-components/markdown-reader/client';

@Module({
  imports: [MarkdownParserModule]
})
export class CoreModule {}

```


##### Using it inside html

```html
<markdown-reader @onError=${e => console.log(e)} link=${'https://raw.githubusercontent.com/rxdi/core/master/README.md'}></markdown-reader>
```


##### Using github raw

```html
<markdown-reader
  @onError=${e => console.log(e)}
  .namespace=${this.params.namespace}
  .repo=${this.params.repo}
></markdown-reader>
```


##### Using it with router

```typescript
import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';
import { MarkdownReaderComponent, MarkdownReaderModule } from '@rxdi/ui-components/markdown-reader/client';

@Module({
  imports: [
    MarkdownReaderModule,
    RouterModule.forChild([
      {
        path: '/:namespace/:repo',
        component: MarkdownReaderComponent
      }
    ])
  ],
})
export class UiComponentsModule {}

```