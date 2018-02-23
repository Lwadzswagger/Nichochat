import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from '../model/user.model';
import { ChatMessage } from '../model/chat-message.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class ChatService {
  flag = true;
  user: any;
  // chatMessages: AngularFireList<any[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  myDMs: ChatMessage [] ;

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

    this.getMessage().valueChanges().subscribe(
      Response => {
  // let lame = Response;
  let myArray: any[];
  for (let i = 0; i < Response.length; i++) {
    for (let z = 0; z < Response[i].users.length; z++) {

if (Response[i].users[z] === this.auth.getcurrentUser().email) {
  // tslint:disable-next-line:no-unused-expression
  myArray = Response[i];
  // console.log(Response[i]);
  // console.log(this.myDMs);

} else {
  // console.log('not mine', Response[i].from);
}

}}

console.log(myArray);
return myArray;
});
// console.log(this.myDMs.from);

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
