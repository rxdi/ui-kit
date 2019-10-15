import { Module, ModuleWithProviders } from '@rxdi/core';
import { Palettes } from '@rxdi/ui-kit/settings';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT } from '@rxdi/ui-kit/styles/chunks/palettes/default';
import { PRIMARY } from '@rxdi/ui-kit/styles/chunks/palettes/primary';
import { SECONDARY } from '@rxdi/ui-kit/styles/chunks/palettes/secondary';
import { DynamicCssService } from './services/dynamic-css/dynamic-css';
import { ResponsiveService } from './services';

@Module()
export class ReactiveUiModule {
  public static forRoot(
    options: { palettes?: Palettes } = {}
  ): ModuleWithProviders {
    return {
      module: ReactiveUiModule,
      providers: [
        ResponsiveService,
        DynamicCssService,
        {
          provide: Palettes,
          useValue: new BehaviorSubject<Palettes>(
            options.palettes || {
              default: DEFAULT,
              primary: PRIMARY,
              secondary: SECONDARY
            }
          )
        }
      ]
    };
  }
}
