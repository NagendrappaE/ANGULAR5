import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe.module';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


  recipes:Recipe []

  constructor(private recipeservice:RecipesService) { 

  }

  ngOnInit() {
    this.recipes=this.recipeservice.getRecipes()

  }
  
}
