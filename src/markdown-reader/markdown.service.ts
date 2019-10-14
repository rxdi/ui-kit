import { Injectable } from '@rxdi/core';
import './prism';
import yaml from 'js-yaml';

import marked from 'marked';
interface Prism {
  highlightElement(code: HTMLElement): void;
}

declare var Prism: Prism;

@Injectable()
export class MarkdownParserService {
  private renderer = new marked.Renderer();
  private cache: Map<string, string> = new Map();

  constructor() {
    this.initParser();
  }

  highlightElements(tags: NodeListOf<HTMLElement>[]) {
    return [].forEach.call(tags, (code: HTMLElement) => {
      if (code.className) {
        Prism.highlightElement(code);
      }
    });
  }

  flushCache() {
    this.cache.clear();
  }

  readAndCompile(text: string) {
    const html = `<div class="content" #contentReference>
      ${marked(text, { renderer: this.renderer })}
    </div>`;
    return html + '\n';
  }

  async fetchMarkdown(link: string) {
    if (this.cache.has(link)) {
      return this.cache.get(link);
    }
    const res = await fetch(link);
    if (res.status !== 200) {
        // location.href = '/not-found';
        throw new Error(`Unable to load markdown status is ${res.status}`);
    }
    const result = this.readAndCompile(await (res).text());
    this.cache.set(link, result);
    return this.cache.get(link);
  }

  async fetchDefinitions(link: string) {
    if (this.cache.has(link)) {
      return this.cache.get(link);
    }
    const res = await fetch(link);
    if (res.status !== 200) {
        // location.href = '/not-found';
        throw new Error(`Unable to load config status is ${res.status}`);
    }
    const result = await (res).text();
    const doc = yaml.load(result);
    this.cache.set(link, doc);
    return result;
  }

  private crypto(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  private escapeBrackets(text: string): string {
    text = text.replace(new RegExp('{', 'g'), '&#123;');
    text = text.replace(new RegExp('}', 'g'), '&#125;');
    return text;
  }

  private appendEmptyLine(text: string) {
    const codeEscape = '">';
    const codeEscId = text.indexOf(codeEscape);
    return (
      text.slice(0, codeEscId + codeEscape.length) +
      '\n' +
      text.slice(codeEscId + codeEscape.length, text.length)
    );
  }

  private replaceFilename(
    renderer: (code: string, directiveRef: string) => string,
    text: string,
    filenameKey: string,
    filenameIndex: number
  ) {
    const startIndex = filenameIndex + filenameKey.length;
    const endIndex = text.indexOf(')');
    const directiveRef = `app` + this.crypto(20);
    const filename = text.slice(startIndex + 1, endIndex);
    return (
      `
<span class="filename">` +
      (filename.length > 0
        ? `
  {{ '${filename}' | extension: ${directiveRef}.isJsActive }}`
        : '') +
      `
<app-tabs #${directiveRef}></app-tabs>
</span>` +
      renderer(text.slice(endIndex + 1), directiveRef).trim()
    );
  }

  private parseSwitcher(
    renderer: (code: string, language: 'typescript' | 'javascript') => string,
    text: string,
    switchKey: string,
    switchIndex: number,
    elementKey?: string
  ) {
    const tsCode = text.slice(0, switchIndex).trim();
    const jsCode = text
      .slice(switchIndex + switchKey.length, text.length)
      .trim();
    const wrapCondition = (snippet: string, lang: 'ts' | 'js') =>
      elementKey
        ? snippet.slice(0, 4) +
          ` [class.hide]="${
            lang === 'js' ? '!' : ''
          }${elementKey}.isJsActive"` +
          snippet.slice(4, snippet.length)
        : snippet;
    return (
      wrapCondition(renderer(tsCode, 'typescript'), 'ts') +
      wrapCondition(renderer(jsCode, 'typescript'), 'js')
    );
  }

  private insertText(text: string, index: number, textToAdd: string) {
    return text.slice(0, index) + textToAdd + text.slice(index);
  }

  private initParser() {

    const originalTableRenderer = this.renderer.table;
    this.renderer.table = (header: string, body: string) =>
      header.includes('<th></th>')
        ? originalTableRenderer.call(this.renderer, '', body)
        : originalTableRenderer.call(this.renderer, header, body);

    const originalCodeRenderer = this.renderer.code;
    this.renderer.code = (
      code: string,
      language: string,
      isEscaped: boolean,
      switcherKey?: string
    ) => {
      const filenameKey = '@@filename';
      const filenameIndex = code.indexOf(filenameKey);
      if (filenameIndex >= 0) {
        return this.replaceFilename(
          (text) =>
            this.renderer.code(text, language, isEscaped),
          code,
          filenameKey,
          filenameIndex
        );
      }

      const switchKey = '@@switch';
      const switchIndex = code.indexOf(switchKey);
      if (switchIndex >= 0) {
        const result = this.parseSwitcher(
          (text, lang) => this.renderer.code(text, lang, isEscaped),
          code,
          switchKey,
          switchIndex,
          switcherKey
        );
        return this.escapeBrackets(result);
      }
      let output: string = originalCodeRenderer.call(
        this.renderer,
        code,
        language,
        isEscaped
      );
      output = switcherKey ? output : this.appendEmptyLine(output);
      return this.escapeBrackets(output);
    };

    const originalLinkRenderer = this.renderer.link;
    this.renderer.link = (href: string, title: string, text: string) => {
      if (!href.includes('http') && !href.includes('mailto')) {
        return (originalLinkRenderer.call(
          this.renderer,
          href,
          title,
          text
        ) as string);
      }
      return originalLinkRenderer.call(this.renderer, href, title, text);
    };

    const originalHeadingRenderer = this.renderer.heading.bind(this.renderer);
    this.renderer.heading = (...args) => {
      let text = originalHeadingRenderer(...args);
      if (!text.includes('h4')) {
        return text;
      }
      const startIndex = text.indexOf('<h') + 3;
      text = this.insertText(text, startIndex, ` appAnchor`);
      text = this.insertText(text, text.indexOf('">') + 2, '<span>');
      return this.insertText(text, text.length - 6, '</span>');
    };

    const originalBlockquoteRenderer = this.renderer.blockquote.bind(
      this.renderer
    );
    this.renderer.blockquote = (quote: string) => {
      let text: string = originalBlockquoteRenderer(quote);
      text = text.replace('<p>', '');
      text = text.replace('</p>', '');
      const blockquoteTag = '<blockquote>';
      text = text.replace('<blockquote>', '<blockquote class="warning">');
      //   text = insertText(text, blockquoteTag.length - 1, ` class="`);
      //   text = insertText(text, text.indexOf('<strong>'), '">');
      return text;
    };
  }
}
