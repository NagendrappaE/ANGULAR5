import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../Recipe.module';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipeEv: Recipe

  @Output('onSelectRecipeEvnt') onSelectRecipeEvnt = new EventEmitter<void>()


  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.onSelectRecipeEvnt.emit()

  }

}
