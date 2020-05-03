import { Component, Input, OnInit } from '@angular/core';
import { AccountServiceService } from './account-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accountObj: { acName: string, status: string }[] = []

  title = 'services-one';
  ngOnInit() {
    this.accountObj = this.accSer.accountObj

  }

  constructor(private accSer: AccountServiceService) { }


 /* onCreateNew(data: { acName: string, status: string }) {
    // this.accountObj.push(data)
  }
  updateStatus(updata: { id: number, status: string }) {

    //this.accountObj[updata.id].status = updata.status

  } */
}
