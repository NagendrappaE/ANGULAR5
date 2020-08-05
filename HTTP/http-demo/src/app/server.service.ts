import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CustomResponse } from './CustomResponse';
import { ServerData } from './server-data';

@Injectable({
  providedIn: 'root'
})
export class ServerService {


  //postURL='https://angular-ng-httpdemo.firebaseio.com/data.json'

  postURL='http://localhost:8080/api/save'
  constructor(private httpclient: HttpClient) { }

  storeServers(servers: any[]) {

    

    const header = new HttpHeaders({
      'content-Type': 'application/json',
      'uniqueId': '123'
    })
    this.httpclient.post(this.postURL, servers)
      .subscribe(
        (response: CustomResponse) => {
          console.log(response)

        },
        (error) => console.error(error))


  }

  getServers() {


   return   this.httpclient.get('http://localhost:8080/api/getserver').pipe(

       catchError(this.handleError) // then handle the error

 )
    

    


  }


 getappName(){

  return this.httpclient.get('http://localhost:8080/api/add')

  //catchError(this.handleError)
  
 }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
