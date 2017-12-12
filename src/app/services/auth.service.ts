import { AngularFireAuth } from 'angularfire2/auth';
import {JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router , ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public user$: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, public router: Router, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
    // this.user$.subscribe(user =>{console.log(user);
    //     });
  }


  loginWithGoogle() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl ') || '/';
      localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //  this.router.navigate(['/chats']);
  }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

 loginWithTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  isLoggedIn() {
const visitor = firebase.auth().currentUser;
console.log(firebase.auth().currentUser);
if (visitor === null) {
return true;
} else {
  return false;
}

  }


  logout() {
    //  localStorage.removeItem('token');
    this.afAuth.auth.signOut().then(res => this.router.navigate(['/login']));
      }

// what type of user for roles purposes
      getcurrentUser() {
        return firebase.auth().currentUser;
      }

}


