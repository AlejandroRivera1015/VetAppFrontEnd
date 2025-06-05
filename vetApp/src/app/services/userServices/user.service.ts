import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, map, Observable } from 'rxjs';
import { UserDTO } from '../../utils/DTO/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLogged : boolean = false;
  private user: UserDTO | null = null;

  constructor( private httpClient: HttpClient) { }

  public getUser() : UserDTO | null {
    return this.user;
  }

  public logIn(credetials : FormGroup) : Observable<number>{
  
      return this.httpClient.post<any>('http://localhost:8080/auth/login',credetials.value,{
        observe: 'response',
        withCredentials: true
      }).pipe(
        map(response => {
          this.user = new UserDTO(response.body.id,response.body.role);
          this.isLogged = true;
          return response.status;
        }),
      catchError(error => {
        this.isLogged = false;
        return [error.status]; 
      }));
  }
}
