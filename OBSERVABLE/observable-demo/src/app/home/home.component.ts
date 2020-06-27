import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,interval, Observer, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  myNumberObs:Subscription
  myobservableCustom:Subscription

  ngOnDestroy(): void {
this.myNumberObs.unsubscribe()
this.myobservableCustom.unsubscribe()
  }

  constructor() { }

  ngOnInit() {
     const myNumber=interval(1000)

   this.myNumberObs=  myNumber .subscribe((numbe)=>{

 console.log(numbe)
     })
 

const myobservable=Observable.create((observer)=>{
setTimeout(() => {
  observer.next('first data package')
}, 2000)

setTimeout(() => {
  observer.next('second data package')
}, 4000)
setTimeout(() => {
  observer.next('third data package')
}, 6000)

setTimeout(() => {
 // observer.error('error data package')
 observer.complete()
}, 8000)


})

//calling myobservable

this.myobservableCustom=myobservable.subscribe(
  (data:String)=>{
  console.log(data)
},
(error:String)=>{
console.error(error)
},
()=>{
console.log('com[leted')
})

  /////////////////////////another example//////////////////
  const myObservable = of(1, 2, 3)

//creating observer object
const observerNum={
  

  next:function(x){
   setTimeout(() => {
    console.log('the values'+x)
//throw Error('jj')
   }, 4000);
  }
  ,

  error:function(){
    setTimeout(() => {
      console.error('the values')  
    }, 3000);
    
  },

  complete:function(){
    console.log('complteddddd')
  }
  


}
//

myObservable.subscribe(observerNum)
  //observer
  myObservable.subscribe(
    (val:number)=>{
console.log('observer got next value'+val)
  },
  (err:string)=>{
console.error('error occured')
  },
  ()=>{
console.log('completed')
  })

//////////////////////////////////another example 2//////////////////////////

//const  mynumberObservable=of(1,2,3,4,5,6,7,8,9,10,11,12,15)


function myNumberObserverF(obs){
  obs.next(1)
  obs.next(1)
  obs.next(1)
  obs.next(1)
  obs.next(1)
  obs.error()
}
const sequence = new Observable(myNumberObserverF);

sequence.subscribe(
  (nummm)=>{
console.log(nummm)
},
()=>{
console.error('errrr orcdcdcdcdvcd')
},
()=>{

  console.log('c0m-keeeee')
})





  }
}
