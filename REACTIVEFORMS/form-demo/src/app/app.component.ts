import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-demo';

  defaultQuestion="pet"

  suggestedName='Nagendra'
  answer=''
  gender=['male','female']

user={

userName:'',
emailId:'',
secreteQuestion:'',
answer:'',
gender:''


}
submitFlg:boolean=false

  @ViewChild('f') signUpForm:NgForm

  // onSubmit(f){

  //   console.log(f)
  //   console.log('submitted!')
  // }


  setSuggestedName(){
console.log('set default name')
this.signUpForm.setValue({

  userData:{
    userName:this.suggestedName,
    email:'test@gmail.com'
  },

  secrete:'pet',
  questionanswer:'hhhh'
})

  }

  onSubmit(){


this.user.userName=this.signUpForm.value.userData.userName

this.user.emailId=this.signUpForm.value.userData.email

this.user.secreteQuestion=this.signUpForm.value.secrete
this.user.answer=this.signUpForm.value.questionanswer
this.user.gender=this.signUpForm.value.genderVal

this.submitFlg=true
this.signUpForm.reset()


    console.log(this.signUpForm)
    console.log('submitted!')
  }
}
