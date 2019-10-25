import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoadingBarModule } from 'ngx-loading-bar';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ClusterViewComponent } from './view/cluster/cluster-view.component';
import { NodeViewComponent } from './view/node/node-view.component';

import { TreeService } from './services/tree.service';
import { TreeItemComponent } from './tree/directives/tree-item/tree-item.component';
import { TreeComponent } from './tree/tree.component';
import { DataService } from './services/data.service';
import { FuseSplashScreenService } from 'src/app/services/splash-screen.service';

import { GatheringDataComponent } from './gathering-data/gathering-data.component';

import { AboutComponent } from './about/about.component';
import { FAQComponent } from './about/FAQComponent';
import { AboutService } from './about/about.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClusterViewComponent,
    NodeViewComponent,
    LoaderComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent,

    TreeComponent,
    TreeItemComponent,
    GatheringDataComponent,
    AboutComponent,
    FAQComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgScrollbarModule,
    FormsModule, ReactiveFormsModule,
    LoadingBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  entryComponents: [ AboutComponent, FAQComponent ],
  providers: [ FuseSplashScreenService, TreeService, DataService, AboutService ],
  bootstrap: [AppComponent]
})
export class AppModule {}

