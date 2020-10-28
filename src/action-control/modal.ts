import { Inject } from '@rxdi/core';
import { html } from '@rxdi/lit-html';
import { Card } from './generic-apps.modal';
import { GenericMenuComponent } from './generic-menu';
import { BehaviorSubject } from 'rxjs';

import { AppsService } from './apps.service';
import { SwiperOptions } from './swiper/swiper.min';

export interface MenuOptions {
  disableAnimations: boolean;
  animations: {
    speed: { zoomOut: number; slideOutUp: number; zoomIn: number };
  };
  swiper: Partial<SwiperOptions>;
}

export class AppsModalComponent extends GenericMenuComponent {
  @Inject(AppsService)
  private static appsService: AppsService;

  constructor(
    cards?: BehaviorSubject<Card[]>,
    options?: BehaviorSubject<MenuOptions>
  ) {
    super(
      html`<apps-menu-component></apps-menu-component>`,
      cards,
      options || AppsModalComponent.appsService.options
    );
  }
}
