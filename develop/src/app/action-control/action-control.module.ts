import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';
import { ActionControlViewComponent } from './action-control-view.component';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: ActionControlViewComponent,
      },
    ]),
  ],
})
export class ActionControlModule {}
