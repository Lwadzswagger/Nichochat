import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Component, OnInit, OnChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChatService} from '../../services/chat.service';
import { AppError } from '../../model/app-errors';
import { NotFoundError } from '../../model/not-found-error';
import { ChatMessage } from '../../model/chat-message.model';
import { BadInput } from '../../model/bad-input';
import { Observable} from 'rxjs/Observable';
import {   AngularFireList } from 'angularfire2/database';





@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
  // providers: [ChatService]
})
export class ChatroomComponent   {
isEditing= false;

  // chatrooms: any[];
  feed: AngularFireList<ChatMessage[]>;
  constructor(private chatservice: ChatService) {
this.chatservice.getMessage();
  }

  // ngOnInit(): void {
  //   this.feed = this.service.getMessage();

    // this.service.getAll()
      // .subscribe(chatrooms => this.chatrooms = chatrooms);
  // }

  // ngOnChanges() {
  //   this.feed = this.service.getMessage();
  // }

// send(input: HTMLInputElement ) {
// this.service.sendMessage(input.value);
// }


}








  // crud operations

  // createChatroom(input: HTMLInputElement) {
  //   let chatroom = { body: input.value };
  //   this.chatrooms.splice(0, 0, chatroom);
  //   input.value = '';
  //   this.service.create(chatroom)
  //     .subscribe(
  //     newChatroom => {
  //       chatroom['id'] = newChatroom.id;
  //     },
  //     (error: AppError) => {
  //       this.chatrooms.splice(0, 1);
  //       if (error instanceof BadInput) {
  //         this.form.setErrors(error.originalError);
  //       } else { throw error; }
  //     });
  // }

//   deleteChatroom(chat) {
//     tslint:disable-next-line:prefer-const
//     let index = this.chatrooms.indexOf(chat);
//     this.chatrooms.splice(index, 1);
//     this.service.delete(chat)
//       .subscribe(
//       null , (error: AppError) => {
// this.chatrooms.splice(index, 0, chat);
//         if (error instanceof NotFoundError) {
//           alert('This post has already been deleted!');
//         } else {
//           throw error;
//         }
//       });
//   }






// submit(form: NgForm ) {
//   this.myMassages.content = this.msg;
//   this.myMassages.username = this.name;
//   this.myMassages.timeStamp = this.timestamp;
//   this.chatservice.create(this.myMassages);
//   this.resetField( form );
// }

// resetField( form: NgForm ) {
// form.reset ( );
// this.myMassages = {
//   $key: '',
//   content: ' ',
//   timeStamp: '',
//   username:  ''
// };}
