import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'hello-world';
  userId=''

  passWord=''
  loginTxt
  isloggedIn=false
  backColor
  login(){
    this.backColor='blueviolet'
    if(this.userId !='' && this.userId !=undefined &&this.passWord!=''&&this.passWord!=undefined){
    this.isloggedIn=true
      this.loginTxt='Logged in successfuly with the  user id'+this.userId

    }
    else if(this.userId ==''){

      alert('Please input the login ID')
    }else if(this.passWord=='')
    {
      alert('Please input valid passWord')

    }
    console.log('inside the login user Id '+this.userId)
    console.log('inside the login PassWord '+this.passWord)

    

  }
  cancel(){
   this.backColor=''
    this.userId=''
    this.passWord=''
    this.loginTxt=''
    console.log('cancel ...')
  }

  getColor(){

    return this.backColor
  }
}
