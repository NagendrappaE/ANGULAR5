import { Injectable } from '@angular/core';
import { IssueMasterServiceService } from './issue-master-service.service';

@Injectable({
  providedIn: 'root'
})
export class InvCatServiceService {

  constructor(private IssueMasterSer:IssueMasterServiceService) { }

  updateCatagory(id,invCatName){

    this.IssueMasterSer.issueMasterList[id].invCatName=invCatName

  }
}
