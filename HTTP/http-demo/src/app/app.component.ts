import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { map } from 'rxjs/operators';
import { CustomResponse } from './CustomResponse';
import { ServerData } from './server-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-demo';

 serverdata : any 

  constructor(private serverService:ServerService){}

appName=''
  servers=[{
    name:'app server',
    capacity:100,
    id:this.generateId()
  },

  {
    name:'db server',
    capacity:200,
    id:this.generateId()
  },
  {
    name:'web server',
    capacity:300,
    id:this.generateId()
  }]

  generateId()
  {
    return Math.round(Math.random()*10000)
  }

  onAddServer(name :string){
    this.servers.push({
      name:name,
      capacity:60,
      id:this.generateId()

    })
  }

  saveServer(){
this.serverService.storeServers(this.servers)
    
  }

  getServers(){
   const serverResp= this.serverService.getServers()

   console.log('----------')


serverResp.subscribe((data: CustomResponse)=>{
  


  console.log(data)


  this.serverdata=data.data
  
  //this.servers.push(this.serverdata)
  // data.map((rr)=>{
  //   rr.name='SERVER'+rr.name
  //   this.servers.push(rr)
  // })
  //or below
  
  for( let aa of this.serverdata){
      aa.id=666666
      this.servers.push(aa)

    }
  
  console.log(this.servers)


},

(error)=>{

console.log(error)
})
 }

 getappName()
 {

  this.serverService.getappName().subscribe(

    (resp :CustomResponse)=>{
      console.log(resp)
    this.appName=resp.data
      },
    (err)=>{console.log(err)}
  )

 }
  
}
