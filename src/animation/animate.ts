import { Options } from './interface';
import { AnimeParams } from 'animejs';
import { TemplateResult, html } from '@rxdi/lit-html';

export function animate(
  fn: (anime: Options) => AnimeParams,
  template: TemplateResult
) {
  return html`
    <rx-animation style="overflow: hidden;" .options=${fn}>
      ${template}
    </rx-animation>
  `;
}
