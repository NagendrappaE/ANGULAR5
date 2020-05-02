import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild ('nameInp') nm :ElementRef
  @ViewChild ('amountInp') amt :ElementRef



   @Output('itemsAddedEvent') itemsAddedEvent=new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }

  onAdditem(){
console.log('on add item  name'+this.nm.nativeElement.value)

this.itemsAddedEvent.emit(new Ingredient(this.nm.nativeElement.value ,this.amt.nativeElement.value))
  }


}
