import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OriginatorserviceService {

public originatorArray:{

  oid:number
  oname:string,
  acNumber:number,
  ifsc:string

}[] =[{

  oid:0,
  oname:'NACH01',
  acNumber:3335101002388,
  ifsc:'INDB001'

},
{

  oid:1,
  oname:'NACH011',
  acNumber:3335101002388,
  ifsc:'INDB0011'

},
{

  oid:2,
  oname:'NACH012',
  acNumber:3335101002388,
  ifsc:'INDB001'

}]

  constructor() { }

  getoriginators(){
    return this.originatorArray
  }

  getOriginatorById(oidinp:Number){

  const found=  this.originatorArray.find((arval)=>{
console.log('the curent value'+arval)
return arval.oid==oidinp
  })

console.log('the final val '+found)
    return found
  }

  updateoriginator(inp:number,{acNumber,ifsc}){
this.originatorArray[inp].ifsc=ifsc
    this.originatorArray[inp].acNumber=acNumber
  }
}
