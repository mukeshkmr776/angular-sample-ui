import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  HomeComponent
} from './home/home.component';
import {
  LoginComponent
} from './login/login.component';
import { ClusterViewComponent } from './view/cluster/cluster-view.component';
import { NodeViewComponent } from './view/node/node-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: 'home'
    },
    children: [{
        path: '',
        component: DashboardComponent,
        data: {
          animation: 'dashboard'
        }
    },
    {
        path: 'cluster/:clusterId',
        component: ClusterViewComponent,
        data: {
          animation: 'cluster'
        }
    },
    {
      path: 'cluster/:clusterId/node/:nodeName',
      component: NodeViewComponent,
      data: {
        animation: 'node'
      }
    }]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      animation: 'login'
    }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
