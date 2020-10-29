import { Reader } from '@rhtml/di';
import { Inject, Injector } from '@rxdi/core';
import { HotKeysService } from '@rxdi/hotkeys';
import {
 Component,
 css,
 html,
 LitElement,
 svg,
 TemplateResult,
} from '@rxdi/lit-html';
import { Router } from '@rxdi/router';
import { ModalService } from '../modal';
import { MODAL_DIALOG_DATA } from '../modal/interface';
import { ResponsiveService } from '../services';
import { animateElement, Animations } from '../styles/animations';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { GenericAppsService } from './generic-apps.service';
import { MenuOptions } from './menu.interface';
import { SwiperCss } from './swiper/swiper.css';
import Swiper from './swiper/swiper.min';

const style = css`
 .swiper-container {
  width: 100%;
  height: 90%;
 }

 .swiper-pagination {
  position: absolute;
  bottom: 0;
 }
 .swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
 }

 .append-buttons {
  text-align: center;
  margin-top: 20px;
 }
 .append-buttons a {
  display: inline-block;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
 }

 .back-button {
  display: none;
  cursor: pointer;
  text-align: center;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
 }

 .back-button:hover {
  background-color: rgba(0, 0, 0, 0.3);
 }

 @supports (-webkit-touch-callout: none) {
  .back-button {
   display: block;
  }
 }

 a {
  cursor: pointer;
 }
 .filter {
  filter: drop-shadow(0px 0px 35px rgba(0, 0, 0, 0.7));
 }
`;

export interface Card {
 path?: string;
 backPath?: string;
 template: TemplateResult;
}

interface State {
 options: MenuOptions;
 _monad: { isMobile: boolean };
 cards: Card[];
}

/**
 * @customElement rx-generic-modal
 */
@Component({
 selector: 'rx-generic-modal',
 style: css`
  .close {
   position: absolute;
   z-index: 1010;
   padding: 5px;
   top: 10px;
   right: 10px;
   border: none;
   cursor: pointer;
   text-transform: none;
   outline: none;
   background-color: transparent;
  }
  svg:hover line {
   stroke: white;
  }
 `,
 template(this: GenericModal) {
  return html`
   <button
    class="close"
    @click=${() => {
     this.router.go('/apps');
     this.modalService.close();
     this.genericAppsService.clearTraces();
    }}
   >
    ${svg`
   <svg width="30" height="30" viewBox="0 0 14 14">
   <line fill="none" stroke="#666" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
   <line fill="none" stroke="#666" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
   </svg>
   `}
   </button>
   <rx-monad>
    <rx-state
     .value=${combineLatest(
      this.data.cards.asObservable(),
      (this.data.options && this.data.options.asObservable()) || of({}),
     ).pipe(
      map(([cards, options]) => ({
       _monad: { isMobile: this.responsive.getBoth().width <= 600 },
       options,
       cards,
      })),
     )}
    ></rx-state>
    <rx-render
     .state=${(s: State, setState: (s: State) => void, SR: ShadowRoot) => {
      if (!s.cards.length) {
       return html``;
      }
      const Select = (selector: string): HTMLElement =>
       SR.querySelector(selector);

      const container = Select('.swiper-container');

      let selectedSlide: HTMLElement;
      const { _monad, cards, options } = s;

      if (container) {
       if (this.swiper) {
        this.swiper.destroy(true, true);
       }
       this.swiper = this.initSwiper({
        pagination: Select('.swiper-pagination'),
        prev: Select('.swiper-button-prev'),
        next: Select('.swiper-button-next'),
        container,
       })(options);

       const path = window.location.href.replace(window.location.origin, '');
       const trace = this.genericAppsService.getLastTrace();

       if (path === trace?.path) {
        this.swiper.slideTo(trace.activeIndex, 0);
       }
       const handler = () =>
        this.goToPage(this.swiper.activeIndex)([cards, options]);

       this.swiper.on('slideChange', () => {
        if (selectedSlide) {
         selectedSlide.removeEventListener('click', handler);
        }
        this.genericAppsService.addTrace({
         activeIndex: this.swiper.activeIndex,
         path,
        });
        setTimeout(() => {
         this.setShadowToActivePage();
         selectedSlide = Select('.swiper-slide-active');
         selectedSlide.addEventListener('click', handler);
        });
       });

       selectedSlide = Select('.swiper-slide-active');
       selectedSlide.addEventListener('click', handler);

       this.setShadowToActivePage();
       this.genericAppsService.addTrace({
        activeIndex: this.swiper.activeIndex,
        path,
       });

       if (!this.rendered && !options.disableAnimations) {
        const zoomInOptions = options.animations?.speed?.zoomIn;
        animateElement(
         container,
         'zoomIn',
         `duration-${zoomInOptions ? zoomInOptions : 300}`,
        ).subscribe();
       }

       this.enterKey.subscribe(() =>
        this.goToPage(this.swiper.activeIndex)([cards, options]),
       );
       this.backKey.subscribe(() => this.onBackSpace()([cards, options]));
       this.leftKey.subscribe(() => this.swiper.slidePrev());
       this.rightKey.subscribe(() => this.swiper.slideNext());
       this.rendered = true;
      }

      return html`
       <style>
        ${Animations} ${SwiperCss} ${style}
       </style>

       <div
        @contextmenu=${(e) => {
         e.stopPropagation();
         e.preventDefault();
         this.onBackSpace()([cards, options]);
        }}
        class="swiper-container"
       >
        <div class="swiper-wrapper">
         ${cards.map(
          (c, i) => html`
           <div
            @click=${() => {
             if (this.swiper.activeIndex === i + 1) {
              this.swiper.slidePrev();
             } else if (this.swiper.activeIndex === i - 1) {
              this.swiper.slideNext();
             }
            }}
            class="swiper-slide swiper-slide-${i}"
            data-history=${i}
           >
            <div>
             ${c.template}
            </div>
           </div>
          `,
         )}
        </div>
        <p class="swiper-pagination"></p>
       </div>

       <r-if .exp=${!_monad.isMobile}>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
       </r-if>
       <div
        class="back-button"
        @click=${() => this.onBackSpace()([cards, options])}
       >
        BACK
       </div>
      `;
     }}
    ></rx-render>
   </rx-monad>
  `;
 },
})
export class GenericModal extends LitElement {
 @Injector(MODAL_DIALOG_DATA)
 private data: {
  cards: BehaviorSubject<Card[]>;
  options: BehaviorSubject<MenuOptions>;
 };

 @Inject(ModalService)
 private modalService: ModalService;

 @Inject(HotKeysService)
 private hotkeys: HotKeysService;

 @Inject(ResponsiveService)
 private responsive: ResponsiveService;

 @Router()
 private router: Router;

 @Inject(GenericAppsService)
 private genericAppsService: GenericAppsService;

 private swiper: Swiper;

 private rendered: boolean;

 private leftKey = this.hotkeys.bind('left');
 private rightKey = this.hotkeys.bind('right');
 private enterKey = this.hotkeys.bind('enter');
 private backKey = this.hotkeys.bind('backspace');

 private goToPage(index: number): Reader<[Card[], MenuOptions], void> {
  return ([cards, options]) => {
   const card = cards[index];
   if (card.path) {
    const slideOutUpOptions = options.animations?.speed?.slideOutUp;
    if (options.disableAnimations) {
     this.router.go(card.path);
    } else {
     animateElement(
      this.swiper.slides[index],
      'slideOutUp',
      `duration-${slideOutUpOptions ? slideOutUpOptions : 200}`,
     ).subscribe(() => this.router.go(card.path));
    }
   }
  };
 }

 private onBackSpace(): Reader<[Card[], MenuOptions], Promise<void>> {
  return async ([cards, options]) => {
   const card = cards[this.swiper.activeIndex];
   if (card.backPath) {
    const zoomOutOptions = options.animations?.speed?.zoomOut;
    await Promise.all(
     [...(Array.from(this.swiper.slides) as HTMLElement[])].map(
      (e) =>
       !options.disableAnimations &&
       animateElement(
        e,
        'zoomOut',
        `duration-${zoomOutOptions ? zoomOutOptions : 200}`,
       ).toPromise(),
     ),
    );
    this.router.go(card.backPath);
    this.genericAppsService.popTrace();
   }
  };
 }

 private initSwiper(dom: {
  pagination: HTMLElement;
  prev: HTMLElement;
  next: HTMLElement;
  container: HTMLElement;
 }): Reader<MenuOptions, Swiper> {
  return (options) => {
   return new Swiper(
    dom.container,
    Object.assign(
     {
      slidesPerView: 3,
      coverflowEffect: {
       rotate: 50,
       stretch: 50,
       depth: 100,
       modifier: 1,
       slideShadows: false,
      },
      effect: 'coverflow' as never,
      breakpoints: {
       640: {
        slidesPerView: 1,
       },
       768: {
        slidesPerView: 2,
       },
       1024: {
        slidesPerView: 3,
       },
      },
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
       el: dom.pagination,
       type: 'fraction',
      },
      navigation: {
       nextEl: dom.next,
       prevEl: dom.prev,
      },
     },
     options ? options.swiper : {},
    ),
   );
  };
 }

 private setShadowToActivePage() {
  const activeSlideElement = this.swiper.slides[this.swiper.activeIndex];
  [...Array.from(this.swiper.slides)].map((slide) =>
   slide.classList.remove('filter'),
  );

  activeSlideElement.classList.add('filter');
 }
}
