import { TranslateService } from '@ngx-translate/core';
import { Injector } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';

export function appInitializerFactory(translate: TranslateService, injector: Injector): () => Promise<any> {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      translate.setDefaultLang('en');
      translate.use('en').subscribe(
        () => {
        },
        () => {
        },
        () => {
          resolve(null);
        },
      );
    });
  });
}
