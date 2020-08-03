import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../Recipe.module';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number
  editmode = false
  recipeForm: FormGroup
  constructor(private activatedrouter: ActivatedRoute, private recipesService: RecipesService,private router :Router) { }

  ngOnInit() {
    this.activatedrouter.params.subscribe(
      (inp) => {
        this.id = +inp['id']
        this.editmode = inp['id'] != null
        console.log('recipe edit comonent id ::' + this.id)
        console.log('recipe edit comonent edit mode ::' + this.editmode)
        this.initForm()

      }
    )
  }

  private initForm() {

    let recipeName = ''
    let recipeImagePath = ''
    let recipeDescription = ''
    let recipeIngredients=new FormArray([]) 


    if (this.editmode) {

      const recipe = this.recipesService.getRecipe(this.id)

      recipeName = recipe.name

      recipeImagePath = recipe.imagePath

      recipeDescription = recipe.description

      if(recipe['ingredient']){

        console.log('inside ingredient cond########')
        for(let ingredient of recipe.ingredient){
          recipeIngredients.push(
 new FormGroup({
'name':new FormControl(ingredient.name,Validators.required),
'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])

 })

          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredient':recipeIngredients
    })
  }


  onSubmit(){

    console.log(this.recipeForm)

    //const newRecip=new Recipe(this.recipeForm.get('name').value,this.recipeForm.get('description').value,this.recipeForm.get('imagePath').value,this.recipeForm.get('ingredient').value )
    //console.log(newRecip)

    
    if(this.editmode){
      this.recipesService.updateRecipe(this.id,this.recipeForm.value)
    }else{
      this.recipesService.addRecipe(this.recipeForm.value)

    }
    this.cancelRecipe()
  }

  onAddIngredient(){

  (<FormArray> this.recipeForm.get('ingredient')).push(
    new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }) ) 
  }
  cancelRecipe(){
this.router.navigate(['../'],{relativeTo:this.activatedrouter})
  }
  OnDeleteIngredient(ingredientInd:number){
    (<FormArray> this.recipeForm.get('ingredient')).removeAt(+ingredientInd)
    console.log('inside the ingrdient index '+ingredientInd)
  }
}
