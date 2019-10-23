import { Injectable, Container } from '@rxdi/core';
import { Palettes } from '../../settings';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({ init: true })
export class DynamicCssService {
  private palletes: BehaviorSubject<Palettes> = Container.get<
    BehaviorSubject<Palettes>
  >(Palettes);

  private style: HTMLStyleElement;

  changeStyle(palettes: Palettes) {
    this.palletes.next(palettes);
  }

  OnInit() {
    this.palletes.subscribe(stream => {
      if (this.style) {
        this.style.remove();
      }
      this.style = document.createElement('style');
      this.style.innerHTML = Object.entries(stream)
        .map(([key, css]) => ` /* ${key} pallete */ ${css.cssText}`)
        .join(' ');
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

// import { Injectable, Inject, Container } from "@rxdi/core";
// import { Palettes } from "@rxdi/ui-kit/settings";
// import { BehaviorSubject } from "rxjs";
// import { map, shareReplay } from "rxjs/operators";
// import { css } from "@rxdi/lit-html";

// @Injectable({ init: true })
// export class DynamicCssService {
//   private palletes: BehaviorSubject<Palettes>;

//   private style: HTMLStyleElement;

//   changeStyle(palettes: Palettes) {
//     this.palletes.next(palettes);
//   }

//   OnInit() {
//     this.palletes = Container.get<BehaviorSubject<Palettes>>(Palettes);
//     const styleSheets = document.styleSheets[0] as CSSStyleSheet;

//     this.palletes.subscribe(palettes => {
//       this.addRules(styleSheets, palettes);
//     });
//     setTimeout(() => {
//       this.addRules(styleSheets as CSSStyleSheet, {
//         default: css`
//           :root {
//             --default-bg-color: transparent;
//             --default-color: #222;
//             --default-border-color: 1px solid #e5e5e5;
//           }
//         `,
//         primary: css`
//           :root {
//             --primary-bg-color: #1e87f0;
//             --primary-color: #fff;
//             --primary-border-color: 1px solid transparent;
//           }
//         `,
//         secondary: css`
//           :root {
//             --secondary-bg-color: #222;
//             --secondary-color: #fff;
//             --secondary-border-color: 1px solid transparent;
//           }
//         `
//       })
//       this.removeRules(styleSheets as CSSStyleSheet)
//       this.removeRules(styleSheets as CSSStyleSheet)

//       this.removeRules(styleSheets as CSSStyleSheet)

//     }, 1000);
//   }

//   removeRules(styleSheets: CSSStyleSheet) {
//     styleSheets.deleteRule(1)
//   }

//   addRules(styleSheets: CSSStyleSheet, palettes: Palettes) {
//     styleSheets.insertRule(palettes.default.cssText, 0);
//     styleSheets.insertRule(palettes.primary.cssText, 0);
//     styleSheets.insertRule(palettes.secondary.cssText, 0);
//   }

//   getStyles() {
//     return this.palletes.asObservable().pipe(
//       map(res => Object.values(res)),
//       map(styles => styles.map(s => s.cssText)),
//       shareReplay({ bufferSize: 1, refCount: true })
//     );
//   }
// }
