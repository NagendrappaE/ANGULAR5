import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }


  logStatusChange(msg){
    console.log('new status chnages ...'+msg)
  }
}
