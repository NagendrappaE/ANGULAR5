import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Authentication } from '../model/authentication';
import { LoginService } from '../services/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private activatdRoute:ActivatedRoute,private route:Router) { }

  loginForm: FormGroup
  loggedInFlg = false


  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'userId': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.loginForm)

    const userId = this.loginForm.value.userId

    const password = this.loginForm.value.password

    const authenticationObj = new Authentication(userId, password, 'EMANDATE')

    this.loginService.authenticateUser(authenticationObj).subscribe(
      (user: any) => {
        console.log(user)

        if (user == null) {
          this.loggedInFlg = true
        } else {
console.log('navigting.')
this.loggedInFlg = false
this.route.navigate(['/emandate'],{relativeTo:this.activatdRoute})
        }

      },
      (error) => {
        console.log(error)
      }
    )
  }

}
