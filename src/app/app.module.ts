import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { SharedModule } from './_shared/shared.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
