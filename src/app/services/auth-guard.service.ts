import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router/src/router_state';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authservice: AuthService) { }

  canActivate(router, state: RouterStateSnapshot) {
return this.authservice.user$.map(user => {
if (user) {return true;
}else {
  this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}  } ) ;
  return false; }
});


 }

}



    // if (this.authservice.isLoggedIn()) { return true; }
    // this.router.navigate(['/login'],
    // { queryParams: { returnUrl: state.url } });
    // return false;


