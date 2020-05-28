import { Injectable } from '@rxdi/core';
import { GlobalMenuComponent } from './global-menu.component';
import './global-menu.component';
import { TemplateResult } from '@rxdi/lit-html';

@Injectable()
export class GlobalMenuService {
  element: GlobalMenuComponent;
  open(template?: TemplateResult) {
    if (this.element) {
     this.close();
    }
    this.element = document.createElement('global-menu') as GlobalMenuComponent;
    this.element.open(template);
    document.body.appendChild(this.element);
  }
  close() {
    this.element.cancel();
    this.element.remove();
  }
}
