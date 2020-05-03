import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShopingService } from './shoping.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingrediants:Ingredient[]

  constructor(private shopingService:ShopingService) { }

  ngOnInit() {
    this.ingrediants=this.shopingService.getIngredient()

    this.shopingService.ingredientChanged.subscribe(

      (ingArr:Ingredient[])=>{
this.ingrediants=ingArr
      }
    )
  }
  

}
