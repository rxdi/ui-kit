import { Module } from '@rxdi/core';
import { AppComponent } from './app.component';
import { MarkdownReaderModule } from '../../../src/markdown-reader';
import { ReactiveUiModule } from '../../../src';
import { ModalModule } from '../../../src/modal';
import { NavModule } from '../../../src/nav';
import { AppRoutingModule } from './app.routing.module';
import { AppComponentsModule } from './app.components.module';
import { GraphModule } from '../../../src/graph';
import { html } from '@rxdi/lit-html';

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
    GraphModule.forRoot(
      {
        uri: 'https://countries.trevorblades.com/',
        pubsub: 'wss://countries.trevorblades.com/'
      },
      {
        error: e => {
          return html`
            <p style="color: black">
              ${e}
            </p>
          `;
        },
        loading: () => {
          return html`
            <div style="text-align: center;">
              <rx-loading palette="danger"></rx-loading>
            </div>
          `;
        }
      }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
