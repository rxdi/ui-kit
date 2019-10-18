import { TemplateResult } from '@rxdi/lit-html';

export interface Article {
  heading: TemplateResult | string;
  meta: TemplateResult | string;
  lead: TemplateResult | string;
  information: TemplateResult | string;
  section: TemplateResult | string;
}
