import { Component, OnInit } from '@angular/core';
import { OriginatorserviceService } from '../originatorservice.service';

@Component({
  selector: 'app-originator',
  templateUrl: './originator.component.html',
  styleUrls: ['./originator.component.css']
})
export class OriginatorComponent implements OnInit {

  constructor(private orgService:OriginatorserviceService) { }
  orglist:{

    oid:number
    oname:string,
    acNumber:number,
    ifsc:string
  
  }[]=[]
  
  ngOnInit() {

  this.orglist=this.orgService.getoriginators()
console.log('the  values'+this.orglist)
  }

}
