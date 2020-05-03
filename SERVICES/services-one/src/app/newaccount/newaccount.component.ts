import { Component, OnInit } from '@angular/core';
import { LoggingServiceService } from '../logging-service.service';
import { AccountServiceService } from '../account-service.service';


@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {

  //@Output('newaccountevent') newaddedacc=new EventEmitter<{acName:string,status :string}>()
  constructor(private loggingSer:LoggingServiceService,private accountService :AccountServiceService) { }

  ngOnInit() {
  }


  addAccount(acName, status) {
    this.loggingSer.logStatusChange(status)

    this.accountService.onCreateNew(acName,status)

    //this.newaddedacc.emit({acName:acName,status:status})

  
  }

}
