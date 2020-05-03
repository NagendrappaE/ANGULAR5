import { Component, OnInit } from '@angular/core';
import { IssueMasterServiceService } from '../issue-master-service.service';

@Component({
  selector: 'app-issuemaster',
  templateUrl: './issuemaster.component.html',
  styleUrls: ['./issuemaster.component.css']
})
export class IssuemasterComponent implements OnInit {

  constructor(private issueMasterSer: IssueMasterServiceService) { }

  ngOnInit() {
  }
  createIssueMaster(issueName, invName) {
    this.issueMasterSer.insertIssueMaster(issueName, invName)
    console.log(issueName + 'cata' + invName)
  }

}
