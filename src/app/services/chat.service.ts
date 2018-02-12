import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { User } from '../model/user.model';
import { ChatMessage } from '../model/chat-message.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ChatService  extends DataService {
  user: any;
  chatMessages: AngularFireList<any[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;


  constructor( http: Http  ) {
super('https://jsonplaceholder.typicode.com/posts', http);
   }




  // constructor(
  //   private fireDb: AngularFireDatabase,
  //   private afAuth: AngularFireAuth
  // ) {
  //   this.afAuth.authState.subscribe(auth => {
  //     if (auth !== undefined && auth !== null) {
  //       this.user = auth;
  //     }
  //   });
  // }

  // getMessage(): AngularFireList<ChatMessage[]> {
  //   return this.fireDb.list('/messages');
  // }

  // sendMessage(msg: string) {
  //   const timeStamp = this.getTimeStamp();
  //   const Email = this.user.email;
  //   // this.chatMessages = this.getMessage();
  //   this.chatMessages.push({
  //     email: Email,
  //     message: msg,
  //     username: this.user.displayName,
  //     timeSent: timeStamp
  //   });
  // }

  getTimeStamp() {
    const now = new Date();
    const date =
      now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDay();
    const time =
      now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
      // console.log('sent st: ', date +' '+ time);

      return date + ' ' + time;
  }


}


























//   constructor( http: Http) {
// super('https://jsonplaceholder.typicode.com/posts', http);
//    }
// chats:chat= new chat();
// items: AngularFireList<any[]>;

// constructor(  public afire: AngularFireDatabase ) {

// pushhh(msg: string) {
//   const timeStamp = this.getTimeStamp();
//   const email = this.user.email;
//   this.fireDb.list('/messages' ).push({ });
//    this.ChatMessage = this.fireDb.list('/messages').snapshotChanges().map(changes => {
//   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
//       });

// var starCountRef = firebase.database().ref('/messages');
// }

// read(){
//    this.items = this.afire.list('/messages');
//     return this.items;
// }

//  create(chatMsg: Message) {
//   this.afire.list('/messages/' + UserId + '').push({
//     Message
//   });
//   }

//  delete(key: string) {
//   this.afire.list('/messages/').remove(key);
//   }

//  edit(key: string, message: string) {
// this.afire.list('/messages').update(key, { message: message });
//   this.editMsg = false;
// }

// addinTo
// edit2( flag: boolean, message: string, key: string ) {
//   if (flag) {
//     this.edit(key, message);
//   }
// }
