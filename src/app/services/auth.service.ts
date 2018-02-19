import { AngularFireAuth } from 'angularfire2/auth';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AuthService {
  private userDetails: firebase.User = null;
  public user$: Observable<firebase.User>;
  UsersRef: any;
  flag: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
    this.UsersRef = this.afs.collection('users').valueChanges();
    // this.user$.subscribe(user =>{console.log(user);
    //     });
  }

  loginWithGoogle() {
    const returnUrl =
      this.route.snapshot.queryParamMap.get('returnUrl ') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        if (this.checkExistance()) {
          console.log('did not come by this side, to just log you');
          alert('Welcome back to NichoChat, ' + this.getcurrentUser().displayName );
        } else {
          this.initialiseAUser();
            }
        console.log(firebase.auth().currentUser);

        // this.checkExistance();
        this.router.navigate(['/chats']);
      });
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

  initialiseAUser() {
    const newuser = [
      {
      name: this.getcurrentUser().displayName
 }, {
      photoUrl: this.getcurrentUser().photoURL
 }, {
        email: this.getcurrentUser().email
 }, {
      isAnAdmin: false
  },
  {
      nicknmae: ''
  }
];

    this.afs
      .collection('user')
      .doc('' + this.getcurrentUser().uid)
      .set(Object.assign({},  newuser))
      .then(success => {
        console.log('success!');
        alert(
        this.getcurrentUser().displayName + ' You have been added succesfully'
        );
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  checkExistance() {
    this.UsersRef.forEach(element => {
      for (let i = 0; i < element.length; i++) {
        if (element[i] === this.getcurrentUser().uid) {
          this.flag = true;
          break;
        }
      }
      if (this.flag === undefined || this.flag === false) {
        return this.flag;
      } else {
        return this.flag;
      }
    });
  }
}
