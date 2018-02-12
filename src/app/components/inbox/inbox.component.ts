import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
// tslint:disable-next-line:no-input-rename
@Input('msg') mess: any [];

  forInbox: boolean;
  feed: any [];
   public static isDisplayInbox() {return true;  }
  constructor(private cservice: ChatService) {

// this.cservice.getAll()
// .subscribe(
//   Response => {
// this.feed = Response.json();
//   });
   }

  ngOnInit() {
  // this.forInbox = true;
  }



}
