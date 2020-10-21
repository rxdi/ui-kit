import { Module, ModuleWithProviders } from '@rxdi/core';
import { Palettes } from './settings';
import { BehaviorSubject, Observable } from 'rxjs';
import { DEFAULT } from './styles/chunks/palettes/default';
import { PRIMARY } from './styles/chunks/palettes/primary';
import { DANGER } from './styles/chunks/palettes/danger';
import { SECONDARY } from './styles/chunks/palettes/secondary';
import { DynamicCssService } from './services/dynamic-css/dynamic-css';
import { ResponsiveService } from './services';
import { WARNING } from './styles/chunks/palettes/warning';
import { ROOT } from './styles/chunks/palettes/root';

@Module()
export class ReactiveUiModule {
  public static forRoot(
    options: { palettes?: Palettes } = {}
  ): ModuleWithProviders {
    return {
      module: ReactiveUiModule,
      providers: [
        ResponsiveService,
        {
          provide: Palettes,
          useValue: new BehaviorSubject<Palettes>(
            options.palettes || {
              root: ROOT,
              default: DEFAULT,
              primary: PRIMARY,
              secondary: SECONDARY,
              danger: DANGER,
              warning: WARNING
            }
          )
        },
        DynamicCssService
      ]
    };
  }
}

export * from './reactive-element';
