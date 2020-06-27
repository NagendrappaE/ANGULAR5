import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, from } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

userval:number

  constructor(private activateRoute:ActivatedRoute,private  userService:UserService) { }

  ngOnInit() {
this.activateRoute.params.subscribe((parm)=>{

this.userval=+parm['id']
},
//errir
()=>{
console.error('errr occured')
}),()=>{
//complete or success


}


























  //  const num= add(1,6)

/////subject  demo//////////

const sub=new Subject<number>()

sub.subscribe(
{
  next:function(x){
    
    console.log('the Observer A '+x)
  }
}
)
//sub.next(8)
//sub.next(88)

const observable=from([1,2,3,4,5,6,7])

observable.subscribe(sub)
  }


  activate(){
    console.log('tha value '+this.userval)
this.userService.userActivated.next(+this.userval)
  }


}
function add(x: number, y: number): number {
    
 console.log('nummm'+y)
  return x + y;
}