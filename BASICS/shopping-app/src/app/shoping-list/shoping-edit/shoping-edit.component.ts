import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShopingService } from '../shoping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') shopEditFormm:NgForm

editMode=false
editedItemIndex:number
editedItem:Ingredient
  ngOnDestroy(): void {

this.subscritionShop.unsubscribe()
  }

  //@ViewChild ('nameInp') nm :ElementRef
  //@ViewChild ('amountInp') amt :ElementRef

subscritionShop:Subscription

  constructor(private shopingService:ShopingService) { }

  ngOnInit() {

    console.log('inside the shoping edit ...')

   this.subscritionShop= this.shopingService.startedEditing.subscribe(
     (indx:number)=>{

      console.log('inside the ngONINIT index'+indx)
      this.editMode=true

      this.editedItemIndex=indx

      this.editedItem=this.shopingService.getIngredientByinx(indx)

      this.shopEditFormm.setValue({

        nameInp:this.editedItem.name,
        amountInp:this.editedItem.amount 
      }
        
      )
     }
   )
  }

  onAdditem(form:NgForm){
//console.log('on add item  name'+this.nm.nativeElement.value)

console.log(form)
const  ingredient=new Ingredient(form.value.nameInp ,form.value.amountInp)

if(this.editMode){
  this.shopingService.updateIngredient(this.editedItemIndex,ingredient)
}else{
  this.shopingService.addShopingItem(ingredient)

}
//this.itemsAddedEvent.emit(new Ingredient(this.nm.nativeElement.value ,this.amt.nativeElement.value))



}

clearForm(){

  this.shopEditFormm.reset()
  this.editMode=false
}

removeIngredient(){
this.shopingService.removeIngredientByIndex(this.editedItemIndex)
this.clearForm()

}
}
