import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, ResolveStart, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // 1. do we need to read that roles array from the localStorage
      if(localStorage.getItem('roles').includes('superadmin'){
        return true;
      }
      else if(localStorage.getItem('roles').includes('admin')){ return true; }
      else if(localStorage.getItem('roles').includes('user')) {return true;  }
      else return false;
      // 2. if role exists then return true
      // 3. if role does not exist then return false
      //4. you are not allowed to access this page.
      // when we will change our role then how to handle this?
      // let's say if we don't have token and roles specifications then it should redirect to 
      // to our unauthorized page but URL should be changed. (security)
      

    
  }
  
}
