import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssueMasterServiceService {

  issueMasterList: { issueName: string, invCatName: string }[] = [{ issueName: 'SBI Cards', invCatName: 'Individual' }]
  constructor() { }

  insertIssueMaster(issueName, invCatName) {
   console.log('issueName'+issueName)
    this.issueMasterList.push({issueName:issueName,invCatName:invCatName})

  }
}
