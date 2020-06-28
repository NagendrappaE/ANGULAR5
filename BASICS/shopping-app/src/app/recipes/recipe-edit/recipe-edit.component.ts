import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number
  editmode=false
  constructor(private activatedrouter:ActivatedRoute) { }

  ngOnInit() {
this.activatedrouter.params.subscribe(
  (inp)=>{
    this.id=+inp['id']
this.editmode=inp['id']!=null
    console.log('recipe edit comonent id ::'+this.id)
    console.log('recipe edit comonent edit mode ::'+this.editmode)


  }
)
  }

}
