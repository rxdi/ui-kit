import { ForComponent } from './for.component';
import { LetComponent } from './let.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-let': LetComponent;
    'rx-for': ForComponent;
  }
}

export * from './let.component';
export * from './for.component';

export * from './hook';
