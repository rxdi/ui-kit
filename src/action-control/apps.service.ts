import { Injectable } from '@rxdi/core';
import { MenuOptions } from './menu.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppsService {
 selectedIndex = new BehaviorSubject(0);

 options = new BehaviorSubject<MenuOptions>({
  swiper: {
   effect: 'coverflow',
  },
  disableAnimations: false,
  animations: { speed: { slideOutUp: 300, zoomIn: 300, zoomOut: 300 } },
 });

 OnInit() {
  const exists = this.getLocalStorage();
  if (exists) {
   this.options.next(JSON.parse(exists));
  } else {
   this.updateLocalStorage();
  }
 }

 getOptionsAsObservable() {
  return this.options.asObservable();
 }

 setOptions(options: MenuOptions) {
  this.options.next(options);
  this.updateLocalStorage();
 }

 toggleAnimations() {
  const options = this.options.getValue();
  options.disableAnimations = !options.disableAnimations;
  this.options.next(options);
  this.updateLocalStorage();
 }

 private getLocalStorage() {
  return localStorage.getItem('apps-options');
 }

 private updateLocalStorage() {
  localStorage.setItem('apps-options', JSON.stringify(this.options.getValue()));
 }
}
