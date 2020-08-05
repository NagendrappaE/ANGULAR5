import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmandateComponent } from './emandate/emandate/emandate.component';

const routes: Routes = [{path:'',component:LoginComponent},
 {path:'emandate',component:EmandateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
