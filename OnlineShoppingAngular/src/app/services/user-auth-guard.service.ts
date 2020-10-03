import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate{

  constructor(private local:LocalStorageService,private router:Router) { }

  canActivate():boolean
  {
    if(this.local.retrieve('user')!=null) return true;
    this.router.navigate(['**']);
     return false;
  }
}
