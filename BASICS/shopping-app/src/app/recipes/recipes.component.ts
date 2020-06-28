import { Component, OnInit } from '@angular/core';
import { Recipe } from './Recipe.module';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  
  ngOnInit() {
  }

}
