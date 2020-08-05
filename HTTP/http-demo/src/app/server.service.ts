import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Server } from './server';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {


   server:Server[]

  constructor(private httpclient: HttpClient) { }

  storeServers(servers: any[]) {

    const header = new HttpHeaders({
      'content-Type': 'application/json',
      'uniqueId': '123'
    })
    this.httpclient.post('https://angular-ng-httpdemo.firebaseio.com/data.json', servers, { headers: header })
      .subscribe(
        (response: Response) => {
          console.log(response)

        },
        (error) => console.error(error))


  }

  getServers() {


   return   this.httpclient.get<
  { name:string,
   capacity:number,
   id:Number
 }[]>('http://localhost:3000/employees').pipe(

       catchError(this.handleError) // then handle the error

 )
    


    


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
