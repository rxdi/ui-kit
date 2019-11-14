// import {
//   Module,
//   ModuleWithProviders,
//   Bootstrap,
//   ModuleArguments,
//   Injectable
// } from '@rxdi/core';
// import { GraphModule, GraphOptions } from '../graph';
// import { GraphqlModuleConfig } from '@rxdi/graphql-client';
// import { RouterModule, Router } from '@rxdi/router';
// import { DEFAULTS } from '../graph/tokens';

// import { MarkdownReaderModule } from '../markdown-reader';
// import { ReactiveUiModule } from '../index';
// import { NavModule } from '../nav';
// import { ModalModule } from '../modal';
// import { AppComponentsModule } from './components';

// import * as rxdi from '@rxdi/core';
// import * as rxjs from 'rxjs';
// import * as operators from 'rxjs/operators';
// import * as lit from '@rxdi/lit-html';
// import { Component, LitElement } from '@rxdi/lit-html';

// @Module()
// export class DecentralizedModule {
//   public static forRoot(
//     config: GraphqlModuleConfig,
//     defaults: DEFAULTS = {} as DEFAULTS
//   ): ModuleWithProviders {
//     return {
//       module: DecentralizedModule,
//       frameworkImports: [
//         AppComponentsModule,
//         ModalModule.forRoot({
//           backdropClose: true
//         }),
//         ReactiveUiModule.forRoot(),
//         MarkdownReaderModule,
//         NavModule.forRoot(),
//         GraphModule.forRoot(config, defaults)
//       ]
//     };
//   }
// }

// interface Options {
//   appSelector: string;
//   module?: ModuleArguments<any, any>;
// }

// export function Boot({ Application, Graph }) {
//   @Module(Application.module)
//   class AppModule {}
//   return Bootstrap(AppModule).subscribe(() => {
//     const app = document.getElementById(Application.appSelector);
//     app.appendChild(document.createElement('rx-graph'));
//     const graph = document.querySelector('rx-graph');
//     if (graph) {
//       graph.options = Graph;
//     }
//   });
// }

// /* RXDI */
// window['rxdi'] = rxdi;
// window['Bootstrap'] = Bootstrap;
// window['Container'] = rxdi.Container;
// window['BootstrapApp'] = Boot;
// window['ModalModule'] = ModalModule;
// window['ReactiveUiModule'] = ReactiveUiModule;
// window['NavModule'] = NavModule;
// window['MarkdownReaderModule'] = NavModule;
// window['AppComponentsModule'] = AppComponentsModule;
// window['DecentralizedModule'] = DecentralizedModule;
// window['RouterModule'] = RouterModule;
// window['GraphModule'] = GraphModule;
// window['Router'] = Router;
// window['Component'] = Component;
// window['Module'] = Module;
// window['Injectable'] = Injectable;
// window['LitElement'] = LitElement;

// /* RXJS */
// window['rxjs'] = rxjs;
// window['operators'] = operators;

// window['map'] = operators.map;
// window['tap'] = operators.tap;
// window['switchMap'] = operators.switchMap;
// window['flatMap'] = operators.flatMap;
// window['merge'] = operators.merge;
// window['mergeMap'] = operators.mergeMap;
// window['mergeMapTo'] = operators.mergeMapTo;
// window['mergeScan'] = operators.mergeScan;
// window['take'] = operators.take;

// window['combineLatest'] = rxjs.combineLatest;
// window['BehaviorSubject'] = rxjs.BehaviorSubject;
// window['Observable'] = rxjs.Observable;
// window['AsyncSubject'] = rxjs.AsyncSubject;
// window['Subject'] = rxjs.Subject;
// window['ReplaySubject'] = rxjs.ReplaySubject;
// window['Scheduler'] = rxjs.Scheduler;
// window['forkJoin'] = rxjs.forkJoin;
// window['of'] = rxjs.of;
// window['from'] = rxjs.from;

// /* Lit html */

// window['lit'] = lit;
// window['html'] = lit.html;
// window['async'] = lit.async;
