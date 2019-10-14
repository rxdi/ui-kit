

import { MarkdownReaderComponent } from './reader';

export * from './markdown.module';
export * from './markdown-menu.provider';
export * from './markdown.service';
export * from './reader/index';

declare global {
    interface HTMLElementTagNameMap {
        'markdown-reader': MarkdownReaderComponent;
    }
}
