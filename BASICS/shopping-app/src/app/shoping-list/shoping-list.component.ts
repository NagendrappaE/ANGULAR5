import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShopingService } from './shoping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit,OnDestroy {
  
  subscriptionIndgrades:Subscription
  
  ngOnDestroy(): void {

    this.subscriptionIndgrades.unsubscribe()
    //throw new Error("Method not implemented.");
  }

  ingrediants: Ingredient[]

  constructor(private shopingService: ShopingService) { }

  ngOnInit() {
    this.ingrediants = this.shopingService.getIngredient()

  this.subscriptionIndgrades=  this.shopingService.ingredientChanged.subscribe(

      (ingArr: Ingredient[]) => {
        this.ingrediants = ingArr
      }
    )
  }


}
