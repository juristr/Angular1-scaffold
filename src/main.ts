// import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic';
// import { enableProdMode } from 'ng-metadata/core';
// import { AppModule } from './app';

import * as angular from 'angular';

import { helloWorldComponent } from './app/helloWorld.component';

let appModule = angular.module('app', [])
                                .component('helloWorld', helloWorldComponent);

angular.bootstrap(document, [ appModule.name ]);

// if ( ENV === 'production' ) {
//   enableProdMode();
// }


// platformBrowserDynamic().bootstrapModule( AppModule );
