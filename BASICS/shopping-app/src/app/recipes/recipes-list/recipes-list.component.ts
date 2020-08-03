import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../Recipe.module';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {

   // this.recipeReciptionSubsc.unsubscribe()
  }


  recipeReciptionSubsc:Subscription

  recipes:Recipe []

  constructor(private recipeservice:RecipesService,private router:Router,private activatedRoute:ActivatedRoute) { 

  }

  ngOnInit() {
this.recipeservice.recipeChanges.subscribe((recObj:Recipe [])=>{

  this.recipes=recObj;
})

    this.recipes=this.recipeservice.getRecipes()

  }
  onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.activatedRoute})
  }
}
