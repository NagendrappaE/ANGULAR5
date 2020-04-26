import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

ingrediants:Ingredient [] =[new Ingredient('Rice','200'),
new Ingredient('ragi','12')]

  constructor() { }

  ngOnInit() {
  }

}
