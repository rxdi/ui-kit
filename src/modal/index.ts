import { Module, ModuleWithProviders } from '@rxdi/core';
import { ModalService } from './modal.service';
import { ModalContainerComponent } from './modal-container.component';
import { MODAL_DIALOG_OPTIONS } from './interface';
import { defaultModalStyle } from './default.css';

@Module()
export class ModalModule {
  public static forRoot(
    options: MODAL_DIALOG_OPTIONS = {}
  ): ModuleWithProviders {
    if (!options.style) {
      options.style = defaultModalStyle;
    }
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

export * from './modal.service';
