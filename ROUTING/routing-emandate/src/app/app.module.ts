import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OriginatorComponent } from './originator/originator.component';
import { SingleoriginatorComponent } from './originator/singleoriginator/singleoriginator.component';
import { EditoriginatorComponent } from './originator/editoriginator/editoriginator.component';
import { MandatelistComponent } from './mandatelist/mandatelist.component';
import { MandateComponent } from './mandatelist/mandate/mandate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OriginatorComponent,
    SingleoriginatorComponent,
    EditoriginatorComponent,
    MandatelistComponent,
    MandateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
