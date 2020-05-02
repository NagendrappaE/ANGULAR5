import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isRegistered = true
  isBalance = false
  balance: number = 2
  accNumber
  accountType

  @Output() registerevent = new EventEmitter<{ AccisRegistered: boolean, AccaccountNumber: string }>();

  @Output() balanceevent = new EventEmitter<{ AaccountType: string, Abalance: number, AisBalance: boolean, AaccountNumber: string }>()

  constructor() { }

  ngOnInit() {
  }
  register(inp1,inp2) {
    console.log('inside account ac ' + inp1.value)
    this.registerevent.emit({ AccisRegistered: this.isRegistered, AccaccountNumber:inp1.value })

  }
  getBalance(inp1,inp2) {
    if (inp1.value == '3335101002388') {
      this.accountType = 'Current'
    } else if (inp1.value == '123456789') {
      this.accountType = 'CC'
    } else {
      this.accountType = 'Savings'

    }
    this.balance++
    this.balanceevent.emit({ AaccountType: this.accountType, Abalance: this.balance, AisBalance: true, AaccountNumber:inp1.value })
  }
}
