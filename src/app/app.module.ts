import { NgModule } from '@angular/core';
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
import { FuseSplashScreenService } from 'src/app/services/splash-screen.service';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeService } from './services/tree.service';

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
    MaterialModule,
    FormsModule, ReactiveFormsModule,
    LoadingBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [ FuseSplashScreenService, TreeService ],
  bootstrap: [AppComponent]
})
export class AppModule {}

