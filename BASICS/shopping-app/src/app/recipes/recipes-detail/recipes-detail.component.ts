import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe.module';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  selRecipe:Recipe

  id:number

  constructor(private recipeService:RecipesService,private activatedRouter:ActivatedRoute,private router :Router,private activatedrouter :ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      (parm)=>{
this.id=+parm['id']
console.log('the  value'+this.id)

this.selRecipe=this.recipeService.getRecipeByIndex(this.id)
      }
    )
  }


  toAddShopingList()
  {
this.recipeService.addIngredientToShopingList(this.selRecipe.ingredient)
  }

  onDeleteRecipe(){

  this.recipeService.deleteRecipe(this.id)
  this.router.navigate(['../'],{relativeTo:this.activatedrouter})

}

}
