import { CSSResult, TemplateResult } from '@rxdi/lit-html';


export interface DialogData {
  title?: string;
  description?: string;
  style?: CSSResult;
  template?: TemplateResult;
}

