import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path :'',component :HomeComponent},
  {path :'users',component :UsersComponent,children:[
    {path :':id/:usrName',component :UserComponent}
  ]},
  

  {path :'servers',
 // canActivate:[AuthGuardService],
 canActivateChild:[AuthGuardService],
   component :ServersComponent, children:[

    {path :':id',component :ServerComponent},

    {path :':id/edit',component :ServerEditComponent}
  
  ]},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
