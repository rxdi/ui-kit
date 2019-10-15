import { TemplateResult } from '@rxdi/lit-html';

export interface AccordionItem {
  title: string | TemplateResult;
  content: string | TemplateResult;
  collapsed?: boolean;
}
