import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoadingBarModule } from 'ngx-loading-bar';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    LoaderComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LoadingBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApp2,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function initializeApp2() {
  return (): Promise < any > => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 0);
    });
  };
}
