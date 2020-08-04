import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrimstrPipe } from './trimstr.pipe';
import { FilterpipePipe } from './filterpipe.pipe';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TrimstrPipe,
    FilterpipePipe
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
