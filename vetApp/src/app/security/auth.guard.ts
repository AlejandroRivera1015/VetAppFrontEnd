import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/userServices/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) : boolean{
    const expectedRole = route.data['role'];
    this.userService.getUser().subscribe(user =>{
      if(expectedRole === user?.getRole()){
        return true;
      }
      return false;
    
    });
    return false;

  }

}
