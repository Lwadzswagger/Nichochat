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
  private authState: Observable<firebase.User>;
  private currentUser: firebase.User = null;


  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.authState = afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        console.log(this.currentUser);
      } else {
        this.currentUser = null;
      }
    });
  }

getauthstate() {
return this.authState;
}

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider());
this.router.navigate(['chats']);
  }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

 loginWithTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  isLoggedIn() {
if (tokenNotExpired() && !this.currentUser === null ) {
 return true ;
} else {
  return  false;
}
  }


  logout() {
     this.afAuth.auth.signOut();
     localStorage.removeItem('token');
     this.router.navigate(['/login']);
      }

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
