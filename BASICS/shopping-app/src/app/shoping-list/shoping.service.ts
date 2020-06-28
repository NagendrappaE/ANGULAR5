import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingService {

  constructor() { }

  ingredientChanged=new Subject<Ingredient[]>()

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


}
