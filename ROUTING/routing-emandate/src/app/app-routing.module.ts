import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OriginatorComponent } from './originator/originator.component';
import { SingleoriginatorComponent } from './originator/singleoriginator/singleoriginator.component';
import { EditoriginatorComponent } from './originator/editoriginator/editoriginator.component';
import { HomeComponent } from './home/home.component';
import { MandateComponent } from './mandatelist/mandate/mandate.component';
import { MandatelistComponent } from './mandatelist/mandatelist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'originator',component:OriginatorComponent},
  {path:'originator/:oic' ,component:SingleoriginatorComponent},
  {path:'originator/:oic/:edit',component:EditoriginatorComponent},
  {path:'mandatelist',component:MandatelistComponent},
  {path:'mandatelist/:mid',component:MandateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
