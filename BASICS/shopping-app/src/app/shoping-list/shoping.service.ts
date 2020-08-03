import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingService {

  constructor() { }

  ingredientChanged=new Subject<Ingredient[]>()

  startedEditing=new Subject<number>()

  ingrediants: Ingredient[] = [new Ingredient('Rice', '200'),
  new Ingredient('ragi', '12')]

  addShopingItem(ing:Ingredient) {

    this.ingrediants.push(ing)

    this.ingredientChanged.next(this.ingrediants.slice())

  }
  getIngredient(){

    return this.ingrediants.slice()
  }

  addIngrediants(ingArr:Ingredient []){
    

    // for (let  inp of ingArr) {
    //   this.addShopingItem(inp)
    // }

    //or
    this.ingrediants.push(...ingArr)

this.ingredientChanged.next(this.ingrediants.slice())
  }

getIngredientByinx(id:number){

  return this.ingrediants[id]

}

updateIngredient(indx:number,newIngredient:Ingredient){

  this.ingrediants[indx]=newIngredient
this.ingredientChanged.next (this.ingrediants.slice())

}

removeIngredientByIndex(inx:number){

  console.log('inside the removeIngredientByIndex '+inx)
this.ingrediants.splice(inx,1)  

this.ingredientChanged.next(this.ingrediants.slice())

console.log(this.ingrediants)

}

}
