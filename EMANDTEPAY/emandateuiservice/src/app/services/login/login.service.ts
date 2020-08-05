import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http'

import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Authentication } from '../../model/authentication';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }

  backendURL='http://localhost:8080/api'

  authenticateUser(auth:Authentication){

    console.log(auth)
    return this.httpclient.post(this.backendURL+'/authenticate',auth).pipe(

      
      catchError(this.handleError)

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
