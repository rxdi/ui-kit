import { Module, ModuleWithProviders } from '@rxdi/core';
import { NavService } from './nav.service';
import { NavComponent } from './nav.component';

@Module()
export class NavModule {
  public static forRoot(): ModuleWithProviders {
    return {
      module: NavModule,
      providers: [NavService],
      components: [NavComponent]
    };
  }
}

export * from './nav.component';
export * from './nav.service';
