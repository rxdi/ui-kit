import { Module } from '@rxdi/core';
import { AppComponent } from './app.component';
import { MarkdownReaderModule } from '../../../src/markdown-reader';
import { ReactiveUiModule } from '../../../src';
import { ModalModule } from '../../../src/modal';
import { NavModule } from '../../../src/nav';
import { AppRoutingModule } from './app.routing.module';
import { AppComponentsModule } from './app.components.module';
import { GraphModule } from '../../../src/graph';

@Module({
  imports: [
    AppComponentsModule,
    AppRoutingModule,
    ModalModule.forRoot({
      backdropClose: true
    }),
    ReactiveUiModule.forRoot(),
    MarkdownReaderModule,
    NavModule.forRoot(),
    GraphModule.forRoot({
      uri: 'https://staging.questups.com/api/graphql',
      pubsub: 'wss://staging.questups.com/api/subscriptions'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
