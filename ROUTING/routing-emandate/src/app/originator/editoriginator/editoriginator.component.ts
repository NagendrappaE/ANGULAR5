import { Component, OnInit } from '@angular/core';
import { OriginatorserviceService } from 'src/app/originatorservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editoriginator',
  templateUrl: './editoriginator.component.html',
  styleUrls: ['./editoriginator.component.css']
})
export class EditoriginatorComponent implements OnInit {

  constructor(private originatorService:OriginatorserviceService,private activateRoute:ActivatedRoute) { }

  singleOrg:{

    oid:number
    oname:string,
    acNumber:number,
    ifsc:string
  
  }

  originatorId=''

  oicval

  ifsc=''
  accountNumber
  ngOnInit() {
   this.oicval= this.activateRoute.snapshot.paramMap.get('oic')
  this.singleOrg=this.originatorService.getOriginatorById(+this.oicval)
this.originatorId=this.singleOrg.oname
this.ifsc=this.singleOrg.ifsc
this.accountNumber=this.singleOrg.acNumber

  }
  updateOriginator(acNumber,ifsc){
console.log('the account number'+acNumber)
console.log('ifsc '+ifsc)
this.originatorService.updateoriginator(this.singleOrg.oid,{acNumber,ifsc})


  }

}
