import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  // user$: Observable<firebase.User>;
  // userDetails: firebase.User = null;

 constructor(
  public authService: AuthService,
   public router: Router) {
  // this.user$ = afAuth.authState;
 }

   walkout() {
     this.authService.logout();
   }
}
