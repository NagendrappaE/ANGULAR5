import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding-app';


  contentApp: string = 'Welcome APP text'

  onPrintAPP(acnt) {
    console.log('inside APP print ' + acnt.cockContextTxt)
    this.contentApp = acnt.cockContextTxt

  }

  onAddAPP(pcnt) {
    this.contentApp = pcnt.cockContextTxt

  }



}
