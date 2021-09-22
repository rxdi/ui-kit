import {
  LitElement,
  Component,
  html,
  async,
  unsafeHTML,
  TemplateResult,
  CSSResult,
} from '@rxdi/lit-html';

const interpolate2 = (template: string, params = {}) =>
  new Function(...Object.keys(params), `return \`${template}\`;`)(
    ...Object.values(params)
  );

interface TemplateOptions<T> {
  templateUrl: Promise<{ default: typeof import('*.html') }>;
  selector: string;
  template?: (self: T) => TemplateResult;
  style?: CSSResult;
  styles?: CSSResult[];
  useShadow?: boolean;
  extends?: string;
  container?: Element | DocumentFragment;
  providers?: Function[];
}

const regexes = [/\${[^{]+}/g, /\@\{(.*?)(?!\@\{)\}/g, /{(.*?)}/g];

export function Template<T>(options: TemplateOptions<T>) {
  function interpolate(this: LitElement, string: any) {
    return string.replace(regexes[0], (match) =>
      match
        .slice(2, -1)
        .trim()
        .split('.')
        .reduce((el: LitElement, k: string) => String(el[k]), this)
    );
  }
  return function (target: typeof LitElement) {
    target.prototype['getTemplate'] = async function () {
      return unsafeHTML(interpolate.call(this, await options.templateUrl));
    };
    target.prototype['render'] = function () {
      return html` ${async(this.getTemplate())} `;
    };
    return Component(options as never)(target) as never;
  };
}
