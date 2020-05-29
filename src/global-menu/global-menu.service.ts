import { Injectable } from '@rxdi/core';
import { GlobalMenuComponent } from './global-menu.component';
import './global-menu.component';
import { TemplateResult } from '@rxdi/lit-html';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalMenuService {
  element: GlobalMenuComponent;
  private menuOpened: Subject<boolean> = new Subject();
  open(template?: TemplateResult) {
    if (this.element) {
     this.close();
    }
    this.element = document.createElement('global-menu') as GlobalMenuComponent;
    this.element.open(template);
    document.body.appendChild(this.element);
    this.menuOpened.next(true);
  }
  close() {
    this.element.cancel();
    this.element.remove();
    this.menuOpened.next(false);
  }
}
