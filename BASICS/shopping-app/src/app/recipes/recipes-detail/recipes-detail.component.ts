import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe.module';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() selRecipe:Recipe

  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
  }

  toAddShopingList()
  {
this.recipeService.addIngredientToShopingList(this.selRecipe.ingredient)
  }

}
