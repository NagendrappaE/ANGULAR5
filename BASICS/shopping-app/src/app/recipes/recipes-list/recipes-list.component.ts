import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe.module';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output('recipeSelectedWas') recipeSelectedWas=new EventEmitter<Recipe>()

recipes:Recipe []=[
  new Recipe('Egg','Egg Masala Tasty','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
  new Recipe('Test','test recipe','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
]

  constructor() { 

  }

  ngOnInit() {
    this.recipes

  }
  onRecipeSelected(recip:Recipe){
this.recipeSelectedWas.emit(recip)
  }
}
