import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingServiceService } from '../logging-service.service';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() acObj=[]
  @Input () id:number

  //@Output('statusChanged')  statusChanged=new EventEmitter<{id:number,status:string}>()
  constructor(private loggser:LoggingServiceService,private accountService :AccountServiceService) { }

  ngOnInit() {
  }


  onSet(action) {
    this.loggser.logStatusChange(action)
    this.accountService.updateStatus(this.id,action)

   // this.statusChanged.emit({id:this.id,status:action})

  }

}
