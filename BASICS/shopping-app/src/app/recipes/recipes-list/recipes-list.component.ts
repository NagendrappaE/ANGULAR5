import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe.module';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


  recipes:Recipe []

  constructor(private recipeservice:RecipesService,private router:Router,private activatedRoute:ActivatedRoute) { 

  }

  ngOnInit() {
    this.recipes=this.recipeservice.getRecipes()

  }
  onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.activatedRoute})
  }
}
