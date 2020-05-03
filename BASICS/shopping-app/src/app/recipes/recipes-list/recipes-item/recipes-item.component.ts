import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../Recipe.module';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipeEv: Recipe



  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.recipeService.onSelectRecipe.emit(this.recipeEv)

  }

}
