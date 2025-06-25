import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/userServices/user.service';
import { map, Observable, take } from 'rxjs';
import { UserDTO } from '../utils/DTO/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) : Observable<boolean>{
    const expectedRole = route.data['role'];


    return this.userService.getUser().pipe(
      take(1),
      map((user) =>{
        if(user && user.getRole() == expectedRole){
          return true;
        }
        else{
          this.router.navigate(['/']);
          return false;
        }
      })
    )

  }

}
