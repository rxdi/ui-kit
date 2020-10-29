import { SwiperOptions } from './swiper/swiper.min';

export interface MenuOptions {
 disableAnimations: boolean;
 animations: {
  speed: { zoomOut: number; slideOutUp: number; zoomIn: number };
 };
 swiper: Partial<SwiperOptions>;
}
