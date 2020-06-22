import { Component, OnInit } from '@angular/core';
import { OriginatorserviceService } from 'src/app/originatorservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleoriginator',
  templateUrl: './singleoriginator.component.html',
  styleUrls: ['./singleoriginator.component.css']
})
export class SingleoriginatorComponent implements OnInit {
  singleOrg:{

    oid:number
    oname:string,
    acNumber:number,
    ifsc:string
  
  }

  orgName=''
  orgId=''
  esitOrgQuryParam=''
  cancelOrgParam=''
  accountNum
  ifsccode=''
  constructor(private orgService:OriginatorserviceService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
this.orgId=this.activatedroute.snapshot.paramMap.get('oic')
this.singleOrg=this.orgService.getOriginatorById(+this.orgId)
this.orgName=this.singleOrg.oname
this.accountNum=this.singleOrg.acNumber
this.ifsccode=this.singleOrg.ifsc
console.log('the naving..'+this.orgId)
this.esitOrgQuryParam=this.activatedroute.snapshot.queryParams['editorg']
this.cancelOrgParam=this.activatedroute.snapshot.queryParams['cancelorg']

  }
  editOriginator(){

    
  }

}
