import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuemasterComponent } from './issuemaster/issuemaster.component';
import { InvestorcatogoryComponent } from './investorcatogory/investorcatogory.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuemasterComponent,
    InvestorcatogoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
