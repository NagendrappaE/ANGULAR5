import { Component, OnInit } from '@angular/core';
import { IssueMasterServiceService } from './issue-master-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  issueMasterList: { issueName: string, invCatName: string }[]=[]
  constructor(private issueMasterSer :IssueMasterServiceService){}

  ngOnInit() {
this.issueMasterList=this.issueMasterSer.issueMasterList

  }
  title = 'services-asba';
}
