import { Component, OnInit, Input } from '@angular/core';
import { InvCatServiceService } from '../inv-cat-service.service';

@Component({
  selector: 'app-investorcatogory',
  templateUrl: './investorcatogory.component.html',
  styleUrls: ['./investorcatogory.component.css']
})
export class InvestorcatogoryComponent implements OnInit {

  @Input() issueMasterInv:[]
  @Input() id:number
  constructor(private invCatSer:InvCatServiceService) { }

  ngOnInit() {
  }

  setCatagory(cat){
this.invCatSer.updateCatagory(this.id,cat)
  }

}
