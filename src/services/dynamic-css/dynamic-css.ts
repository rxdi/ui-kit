import { Injectable, Inject, Container } from '@rxdi/core';
import { Palettes } from '@rxdi/ui-kit/settings';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({ init: true })
export class DynamicCssService {
  @Inject(Palettes)
  private palletes: BehaviorSubject<Palettes>;

  private style: HTMLStyleElement;

  changeStyle(palettes: Palettes) {
    this.palletes.next(palettes);
  }

  OnInit() {
    this.palletes = Container.get<BehaviorSubject<Palettes>>(Palettes);
    this.palletes.subscribe(stream => {
      if (this.style) {
        this.style.remove();
      }
      this.style = document.createElement('style');
      this.style.innerHTML = Object.values(stream).join(' ');
      document.head.appendChild(this.style);
    });
  }

  getStyles() {
    return this.palletes.asObservable().pipe(
      map(res => Object.values(res)),
      map(styles => styles.map(s => s.cssText)),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
