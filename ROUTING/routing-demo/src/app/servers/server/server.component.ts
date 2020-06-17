import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { ServerService } from 'src/app/server.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  subscriptionparam:Subscription

  serverName=''
  serverStatus=''
  constructor(private router:Router,private routerActivated:ActivatedRoute,private service:ServerService) { }

  ngOnInit() {
this.subscriptionparam=this.routerActivated.params.subscribe((parm:Params)=>{{

  const serveObj=this.service.getServer(+parm['id'])
  this.serverName=serveObj.name
  this.serverStatus=serveObj.status
  console.log('the server id '+this.serverName)

}})

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptionparam.unsubscribe()
  }

  onEditServer(){
    console.log('heloow ')
    this.router.navigate(['edit'],{relativeTo:this.routerActivated})
  }
}
