import {
  Module,
  ModuleWithProviders
} from '@rxdi/core';
import {
  GraphqlModule,
  GraphqlModuleConfig
} from '@rxdi/graphql-client';
import { GraphComponent } from './graph.component';

@Module()
export class GraphModule {
  public static forRoot(
    config: GraphqlModuleConfig
  ): ModuleWithProviders {
    return {
      module: GraphModule,
      components: [GraphComponent],
      frameworkImports: [
        GraphqlModule.forRoot(config)
      ]
    };
  }
}
