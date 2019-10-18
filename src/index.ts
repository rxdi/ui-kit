import { Module, ModuleWithProviders } from '@rxdi/core';
import { Palettes } from '@rxdi/ui-kit/settings';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT } from '@rxdi/ui-kit/styles/chunks/palettes/default';
import { PRIMARY } from '@rxdi/ui-kit/styles/chunks/palettes/primary';
import { DANGER } from '@rxdi/ui-kit/styles/chunks/palettes/danger';
import { SECONDARY } from '@rxdi/ui-kit/styles/chunks/palettes/secondary';
import { DynamicCssService } from '@rxdi/ui-kit/services/dynamic-css/dynamic-css';
import { ResponsiveService } from '@rxdi/ui-kit/services';

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
              default: DEFAULT,
              primary: PRIMARY,
              secondary: SECONDARY,
              danger: DANGER,
            }
          )
        },
        DynamicCssService,
      ]
    };
  }
}
