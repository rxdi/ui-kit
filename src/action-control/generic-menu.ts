import { Inject } from '@rxdi/core';
import { css, LitElement, TemplateResult } from '@rxdi/lit-html';
import { ModalService } from '../modal';
import { BehaviorSubject } from 'rxjs';

import { Card, GenericModal } from './generic-apps.modal';
import { MenuOptions } from './menu.interface';

export class GenericMenuComponent extends LitElement {
 @Inject(ModalService)
 private modalProvider: ModalService;

 constructor(
  private template: TemplateResult,
  public cards: BehaviorSubject<Card[]> = new BehaviorSubject([]),
  private options: BehaviorSubject<Partial<MenuOptions>> = new BehaviorSubject(
   {},
  ),
 ) {
  super();
 }

 render() {
  if (this.template) {
   return this.template;
  }
  throw new Error('Please specifiy generic template');
 }

 OnInit() {
  this.openDialog().subscribe();
 }

 private openDialog() {
  return this.modalProvider.openComponent(
   GenericModal,
   {
    cards: this.cards,
    options: this.options,
   },
   {
    backdropClose: true,
    style: css`
     .wrapper {
      position: fixed;
      top: 0;
      left: 0;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      width: 100%;
      height: 100%;
      z-index: 1000;
     }

     @keyframes scale {
      from {
       transform: scale(0.4);
      }
      to {
       transform: scale(1);
      }
     }

     @keyframes blur {
      to {
       backdrop-filter: blur(20px);
      }
     }

     .backdrop {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: all;
      z-index: 10;
      backdrop-filter: blur(25px);
      /* animation: blur 1s linear forwards; */
     }

     .content {
      z-index: 20;
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: all;
     }
    `,
   },
  );
 }
}
