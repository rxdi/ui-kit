import { Module, ModuleWithProviders } from '@rxdi/core';
import { ModalService } from './modal.service';
import { ModalContainerComponent } from './modal-container.component';
import { MODAL_DIALOG_OPTIONS } from './interface';

@Module()
export class ModalModule {
  public static forRoot(
    options: MODAL_DIALOG_OPTIONS = {}
  ): ModuleWithProviders {
    return {
      module: ModalModule,
      providers: [
        ModalService,
        {
          provide: MODAL_DIALOG_OPTIONS,
          useValue: options
        }
      ],
      components: [ModalContainerComponent]
    };
  }
}
