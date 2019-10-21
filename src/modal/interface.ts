import { InjectionToken } from '@rxdi/core';
import { CSSResult } from '@rxdi/lit-html';

export interface Component extends Function {
  is?(): string;
}

export const MODAL_DIALOG_DATA = new InjectionToken('rxdi-ui-kit-modal-data');
export const MODAL_DIALOG_OPTIONS = new InjectionToken(
  'rxdi-ui-kit-modal-options'
);

export interface MODAL_DIALOG_OPTIONS {
  backdropClose?: boolean;
  style?: CSSResult;
  hideScroll?: boolean;
}
