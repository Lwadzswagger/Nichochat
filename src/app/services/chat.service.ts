import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from '../model/user.model';
import {ChatMessage} from '../model/chat-message.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './auth.service';

@Injectable()
export class ChatService {
  flag = true;
  user: any;
  // chatMessages: AngularFireList<any[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  personalChatGoups: any = this.afs
    .collection('groupchat');
    // .doc('' + this.auth.getcurrentUser().uid).collection('messages' );
// , ref => ref.orderBy('timeStamp').limit(5)

  constructor(
    private fireDb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private auth: AuthService
  ) {
    // tslint:disable-next-line:no-shadowed-variable
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
  }





  myDirectMessage() {
// for (let i = 0; i < this.personalChatGoups.length; i++) {
//   if (this.personalChatGoups[i].search(this.auth.getcurrentUser().email) === -1) {
// console.log('contains', this.personalChatGoups[i]);
// } else {
// console.log('DOES NOTcontains', this.personalChatGoups[i]);
//   }
// }
// console.log('onother proof of cons');


  // this.personalChatGoups.forEach(element => {
    // if (this.flag) {
        for (let i = 0; i < this.personalChatGoups.length; i++) {
            if (this.personalChatGoups[i].users.search(this.auth.getcurrentUser().email) === -1) {
              console.log('contains', this.personalChatGoups[i]);
                   } else {
              console.log('DOES NOTcontains', this.personalChatGoups[i]);
                }
        }
        console.log('reached end');

    // }
// });
  }





  getMessage() {
    return this.personalChatGoups;
  }

  sendMessage(msg: string)  {
    const newMSG = {
         message: msg,
         timeStamp: this.getTimeStamp(),
         from: this.auth.getcurrentUser().email,
         users: [this.auth.getcurrentUser().email, 'friend']
        };

    this.afs
      .collection('groupchat')
      .add( newMSG )
      .then(success => {
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  getTimeStamp() {
    const now = new Date();
    const date =
      now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDay();
    const time =
      now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    return date + ' ' + time;
  }
}
