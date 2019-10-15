import { Module, ModuleWithProviders } from '@rxdi/core';
import { ModalService } from './modal.service';
import { ModalContainerComponent } from './modal-container.component';

@Module()
export class ModalModule {
  public static forRoot(): ModuleWithProviders {
    return {
      module: ModalModule,
      providers: [ModalService],
      components: [ModalContainerComponent]
    };
  }
}
