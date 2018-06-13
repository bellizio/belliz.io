import { enableProdMode, NgModuleRef, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createNewHosts } from '@angularclass/hmr';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// hot module replacement config
export const hmrBootstrap = (
  module: any,
  bootstrap: () => Promise<NgModuleRef<any>>
) => {
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrap().then((mod) => (ngModule = mod));
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map((c) => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

// bootstrap with hmr (if enabled) for development
// otherwise bootstrap for production
if (environment.hmr) {
  module['hot']
    ? hmrBootstrap(module, bootstrap)
    : bootstrap().catch((err) => console.log(err));
} else {
  bootstrap().catch((err) => console.log(err));
}
