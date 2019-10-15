import { Injectable, Inject } from '@rxdi/core';
import { Palettes } from '@rxdi/ui-kit/settings';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({ init: true })
export class DynamicCssService {
  @Inject(Palettes)
  private palletes: BehaviorSubject<Palettes>;

  changeStyle(palettes: Palettes) {
    this.palletes.next(palettes);
  }

  getStyles() {
    return this.palletes.asObservable().pipe(
      map(res => Object.values(res)),
      map(styles => styles.map(s => s.cssText)),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
