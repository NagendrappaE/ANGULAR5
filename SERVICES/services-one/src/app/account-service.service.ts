import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor() { }


  accountObj = [
    {
      acName: 'Master',
      status: 'active'
    },
    {
      acName: 'Child',
      status: 'inactive'
    }
  ]

  onCreateNew(acName: string, status: string) {
    this.accountObj.push({ acName: acName, status: status })
  }
  updateStatus(id: number, status: string) {
    this.accountObj[id].status = status

  }
}
