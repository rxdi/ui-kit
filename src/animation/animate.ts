import { Options } from './interface';
import { AnimeParams } from 'animejs';
import { TemplateResult, html } from '@rxdi/lit-html';

export function animate(
  template: TemplateResult,
  fn: (anime: anime.AnimeParams) => AnimeParams = ({ stagger }) => ({
    delay: stagger(200),
    translateX: 0,
    easing: 'spring(1, 80, 10, 0)'
  }),
) {
  return html`
    <rx-animation .options=${fn}>
      ${template}
    </rx-animation>
  `;
}
