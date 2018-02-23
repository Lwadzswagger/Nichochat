import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from '../../model/chat-message.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
// tslint:disable-next-line:no-input-rename
@Input('msg') mess: any [];

  forInbox: boolean;
  feeds: any;

  constructor(
    private cservice: ChatService,
    public  auth: AuthService,
  ) {
    this.feeds = this.cservice.myDirectMessage();


// .valueChanges()
// .subscribe(
//   Response => {
// = Response;
//   });

// this.cservice.myDirectMessage();
// console.log('just to prove a point');

}

ngOnInit() {
  // this.cservice.myDirectMessage();
  // this.forInbox = true;

  }



}
