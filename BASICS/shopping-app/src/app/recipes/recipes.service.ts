import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './Recipe.module';
import { Ingredient } from '../shared/Ingredient.model';
import { ShopingService } from '../shoping-list/shoping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  constructor(private shopService:ShopingService) { }


  recipes:Recipe []=[
    new Recipe('Egg','Egg Masala Tasty','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg',[new Ingredient('buns',1),
  new Ingredient('meat',23)]),
    new Recipe('Test','test recipe','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',[new Ingredient('buns',1),
    new Ingredient('meat',23)])
  ]

  getRecipes(){

    return this.recipes.slice()
  }

  addIngredientToShopingList(ingArr:Ingredient[]){
this.shopService.addIngrediants(ingArr)

  }

  getRecipeByIndex(index:number):Recipe{
    return this.recipes.slice()[index]
  }

 
}
