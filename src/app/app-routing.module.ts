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
import {
  ViewComponent
} from './view/view.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: 'home'
    },
    children: [{
        path: 'view/:id',
        component: ViewComponent,
        data: {
          animation: 'view'
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
