import { AngularFireAuth } from 'angularfire2/auth';
import {JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { log } from 'util';

// import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {
        this.userDetails = null;
      }
    });
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

 loginWithTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  isLoggedIn() {
    return tokenNotExpired();
  }


  logout() {
     localStorage.removeItem('token');
    this.afAuth.auth.signOut().then(res => this.router.navigate(['/login']));
      }

// last night's code
// usefull when determinig user roles
      getcurrentUser() {
          // tslint:disable-next-line:prefer-const
          let token = localStorage.getItem('token');
        // tslint:disable-next-line:curly
        if (!token) return null;
        return new JwtHelper().decodeToken(token);
      }

}



 // if (this.user == null) {
    //   return false;
    // } else {
    //   return true;
    // }

  // logout() {
  // return this.afAuth.auth.signOut();
  // }  // **logout() {
  //     this._firebaseAuth.auth.signOut()
  //     .then((res) => this.router.navigate(['/']));
  //   }
  // }
