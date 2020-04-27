import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() balance
  @Input() isRegistered
  @Input()  isBalance
  @Input() accNumber
  @Input()  accountType
  constructor() { }

  ngOnInit() {
  }

}
