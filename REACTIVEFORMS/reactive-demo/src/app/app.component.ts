import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female']


  forbiddenUserName = ['Nisha', 'Namita'];

  signUpForm: FormGroup
  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails)
      }),

      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })

this.signUpForm.valueChanges.subscribe((value)=>{

console.log(value)
})

this.signUpForm.statusChanges.subscribe((status)=>{

  console.log(status)
})

this.signUpForm.setValue({
'userData':{

  'username':'test',
  'email':'test@gmail.com'

},
'gender':'female',
'hobbies':[]

})


this.signUpForm.patchValue(
 {
'userData':{
  'username':'Nagendra'

}

 }
)

    // throw new Error("Method not implemented.");
  }

  title = 'reactive-demo';

  onSubmit() {
    console.log(this.signUpForm)
    console.log('submitted' + this.signUpForm.get('userData.username').value)

    this.signUpForm.reset()
  }
  addHobbies() {
    const hob = new FormControl(null);

    (<FormArray>this.signUpForm.get('hobbies')).push(hob)
  }

  forbiddenNames(controle: FormControl): { [str: string]: boolean } {
    if (this.forbiddenUserName.indexOf(controle.value) !== -1) {

      return { 'nameisforbidden': true }

    }
    return null;


  }

  forbiddenEmails(controle: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve, reject) => {

      setTimeout(() => {
        if (controle.value === 'test@gmail.com') {

          resolve({ 'emailIsForBidden': true })
        } else {
          resolve(null)

        }

      }, 1000)
    })

    return promise
  }
}
