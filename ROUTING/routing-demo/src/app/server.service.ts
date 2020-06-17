import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

public servers:{id:number,name:string,status:string} []=[
  {id:0,name:'Web server',status:'online'},
  {id:1,name:'app server',status:'offline'},
  {id:2,name:'db server',status:'offline'},
  {id:3,name:'linux server',status:'online'}
]

  constructor() { }

  getServers(){
return this.servers

  }
  getServer(id:number){
const singleserver=this.servers.find((serv)=>{

return serv.id===id
})
console.log('inside th get server'+singleserver)
return  singleserver
  }

  updateServer(id:number,{name,status}){
    this.servers[id].name=name;
    this.servers[id].status=status
  }
}
