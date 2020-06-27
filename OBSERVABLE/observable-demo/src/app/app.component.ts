import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  
  user1Activated:boolean=false
  user2Activated:boolean=false

unsubscribeUserService:Subscription

  constructor(private userService:UserService){ }
  
  ngOnInit(): void {

  this.unsubscribeUserService=  this.userService.userActivated.subscribe((x:number)=>{
      if(x===1){
        this.user1Activated=true
      }else{
        this.user2Activated=true
      }
    })


    //throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    this.unsubscribeUserService.unsubscribe()
   // throw new Error("Method not implemented.");
  }
  title = 'observable-demo';
}
