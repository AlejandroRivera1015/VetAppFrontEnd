import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient: HttpClient) { }

  public logIn(credetials : FormGroup) : Observable<number>{
  
      return this.httpClient.post<any>('http://localhost:8080/auth/login',credetials.value,{
        observe: 'response',
        withCredentials: true
      }).pipe(
        map(response => response.status),
      catchError(error => {
        console.error('Login failed', error);
        return [error.status]; 
      }));
}


}
