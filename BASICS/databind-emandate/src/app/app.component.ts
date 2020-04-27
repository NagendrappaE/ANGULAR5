import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databind-emandate';

  APPbalance:number
  APPaccNumber 
  APPaccountType
  APPisBalance=true
  APPisRegistered

  APPRegister( reg :{AccisRegistered: boolean, AccaccountNumber: string }){
    console.log('inpval1'+reg.AccisRegistered )
    console.log('inpval2::::::'+reg.AccaccountNumber )

this.APPisRegistered=reg.AccisRegistered
this.APPaccNumber=reg.AccaccountNumber


  }

  APPBalanceShow(bal:{AaccountType: string, Abalance: number, AisBalance: boolean, AaccountNumber: string}){

this.APPbalance=bal.Abalance
this.APPaccountType=bal.AaccountType
this.APPisBalance=bal.AisBalance
this.APPaccNumber=bal.AaccountNumber


  }
  
}
