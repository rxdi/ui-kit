import { Injectable } from '@rxdi/core';
import { BehaviorSubject } from 'rxjs';
import { TocInterface } from './toc/toc.interface';

@Injectable()
export class MarkdownParserMenuProvider {
  menu: BehaviorSubject<TocInterface[]> = new BehaviorSubject([]);
  activeId: number;
  private readonly scrollTopOffset = 100;

  setItems(items: TocInterface[]) {
    this.menu.next(items);
  }

  clearMenu() {
    this.menu.next([]);
  }

  addItem(item: TocInterface) {
    this.menu.next([...this.menu.getValue(), item]);
  }

  lookupHeadings(contentReference: ShadowRoot) {
    if (!contentReference) {
      return;
    }
    const headings = contentReference.querySelectorAll('h3, h4');
    const removeAnchor = (text: string) => {
      const anchorId = text && text.indexOf('#');
      return anchorId >= 0 ? text.slice(0, anchorId) : text;
    };
    const heads = Array.from(headings).map((item: HTMLElement) => ({
      offsetTop: item.offsetTop,
      textContent: removeAnchor(item.textContent),
      elementRef: item
    }));
    if (heads && heads.length) {
      const index = this.findCurrentHeading(headings);
      this.setItems([
        ...heads.map(e => ({
          elementRef: e.elementRef,
          title: e.textContent
        }))
      ]);
      if (index > 0) {
        this.navigateToAnchor(heads[index].elementRef);
      }
    }
  }

  findCurrentHeading(headings) {
    const marginOffset = 15;
    for (let i = 0; i < headings.length; i++) {
      if (headings.length - 1 === i) {
        return (this.activeId = i);
      } else if (
        headings[i + 1].offsetTop >=
        window.pageYOffset + this.scrollTopOffset + marginOffset
      ) {
        return (this.activeId = i);
      }
    }
  }

  navigateToAnchor(elementRef: HTMLElement) {
    if (elementRef) {
      window.scroll({
        top: elementRef.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  }
}
