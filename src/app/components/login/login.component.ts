import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, } from '../../services/auth.service';
// import { }, RouterStateSnapshot } from '@angular/router/src/router_state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    // tslint:disable-next-line:prefer-const
    returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  // invalidLogin: boolean;


    constructor(
      private router: Router,
      private route: ActivatedRoute,
      public authService: AuthService) { }

    // signIn(credentials) {
    //   this.authService.login(credentials)
    //     .subscribe(result => {
    //       if (result)
    //         this.router.navigate(['/']);
    //       else
    //         this.invalidLogin = true;
    //     });
    // }




    signInWithGoogle() {
      this.authService.loginWithGoogle();
      this.router.navigate([this.returnUrl || '/' ]);

      }
     signInWithFacebook() {
        this.authService.loginWithGoogle();
        }
     signInWithTwitter() {
          this.authService.loginWithGoogle();
          }
     getout() {
            this.authService.logout();
          }

// tslint:disable-next-line:prefer-const

}
