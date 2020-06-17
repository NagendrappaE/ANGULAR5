import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServerService } from 'src/app/server.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit {
serverStatus=''
servername=''
singleserver:{id:number,name:string,status:string}

allowEdit
sid

subscriptionparam:Subscription


  constructor(private router:ActivatedRoute,private server:ServerService) { }

  ngOnInit() {
    console.log('query param'+this.router.snapshot.queryParams['allowEdit'])

this.router.queryParams.subscribe((qparam:Params)=>{

this.allowEdit=qparam['allowEdit']  
  console.log('the query param value '+this.allowEdit)
})

     this.router.params.subscribe((pam:Params)=>{
    //  this.servername= this.server.servers[pam['id']].name
   this. sid=+pam['id']
   console.log(typeof this.sid)
    this.singleserver= this.server.getServer(this.sid)

    this.servername=this.singleserver.name

    this.serverStatus=this.singleserver.status

      console.log(this.servername)
  })

}name
ngOnDestroy() {
  //Called once,name before the instance is destroyed.
  //Add 'implemenaments OnDestroy' to the class.
  
  //this.subscriptionparam.unsubscribe()
}
updateServer(){
  
  this.server.updateServer(this.singleserver.id,{name:this.singleserver.name,status:this.serverStatus})

}
}