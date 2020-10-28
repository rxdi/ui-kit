/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@rxdi/core';
import { Component } from '@rxdi/lit-html';
import { Card } from '../generic-apps.modal';
import { BehaviorSubject, isObservable, Observable } from 'rxjs';

type FN<T> = (deps: T) => Promise<Card[]> | Card[];

export interface ViewOptions<D = any> {
 onUpdateFirst?: <T>(self: T) => void;
 cards: <T>(self: T) => Promise<FN<D>> | FN<D> | Observable<FN<D>>;
 deps?: any;
}
function randomString(len, charSet?) {
 charSet = charSet || 'abcdefghijklmnopqrstuvwxyz';
 let str = '';
 for (let i = 0; i < len; i++) {
  const randomPoz = Math.floor(Math.random() * charSet.length);
  str += charSet.substring(randomPoz, randomPoz + 1);
 }
 return str;
}
export const View = <T = any>(options: ViewOptions<T>, config?) => <
 K extends new (...args: any[]) => {}
>(
 Base: K,
) => {
 return Component({
  ...config,
  selector: [randomString(8), '-', randomString(8)].join(''),
 })(
  class extends Base {
   cards: BehaviorSubject<Card[]>;
   async OnUpdateFirst() {
    let cards = await options.cards.call(this);
    if (isObservable(cards)) {
     cards = await cards.toPromise();
    }
    options.deps = options.deps || [];
    this.cards.next(await cards(options.deps.map((d) => Container.get(d))));
   }
  },
 );
};
