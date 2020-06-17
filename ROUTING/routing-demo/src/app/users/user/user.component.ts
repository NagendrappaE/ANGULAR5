import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:{id:number,usrName:string}

subscriptionparam:Subscription
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      id:this.route.snapshot.params['id'],
      usrName:this.route.snapshot.params['usrName']
    }
 this.subscriptionparam =  this.route.params.subscribe((pam:Params)=>{
this.user.id=pam['id']
this.user.usrName=pam['usrName']
console.log(this.user.id)

    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
this.subscriptionparam.unsubscribe()    
  }

}
