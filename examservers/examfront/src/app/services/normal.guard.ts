import { _Constructor } from '@angular/material/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class NormalGuard implements CanActivate{

  constructor(private login:LoginService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   if(this.login.isloggedIn() || this.login.getuserrole()=="NORMAL"){
    console.log("enter in normal guard")
    return true;
   }
   this.router.navigate(['login'])
    return false;
  }

}
