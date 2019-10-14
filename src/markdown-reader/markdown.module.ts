import { Module } from '@rxdi/core';
import { MarkdownParserService } from './markdown.service';
import { TocComponent } from './toc/toc.component';
import { MarkdownParserMenuProvider } from './markdown-menu.provider';
import { MarkdownReaderComponent } from './reader/markdown-reader.component';

@Module({
  components: [TocComponent, MarkdownReaderComponent],
  providers: [MarkdownParserService, MarkdownParserMenuProvider]
})
export class MarkdownReaderModule {}
