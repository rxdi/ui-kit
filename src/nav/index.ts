import { Module, ModuleWithProviders } from '@rxdi/core';
import { Nav } from './nav.service';
import { NavComponent } from './nav.component';

@Module()
export class NavModule {
  public static forRoot(): ModuleWithProviders {
    return {
      module: NavModule,
      providers: [Nav],
      components: [NavComponent]
    };
  }
}

export * from './nav.component';
export * from './nav.service';
