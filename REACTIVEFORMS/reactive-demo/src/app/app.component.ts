import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
 
  genders=['male','female']

  signUpForm:FormGroup
  ngOnInit(): void {

    this.signUpForm=new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.required,Validators.email])
      }),
      
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])
    })
   // throw new Error("Method not implemented.");
  }

  title = 'reactive-demo';

  onSubmit(){
    console.log('submitted'+this.signUpForm.get('userData.username').value)
  }
  addHobbies(){
    const hob=new FormControl(null);

    (<FormArray>this.signUpForm.get('hobbies')).push(hob)
  }
}
