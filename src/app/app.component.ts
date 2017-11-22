import { Component, OnInit } from '@angular/core';
// import { Message } from './model/message';
import { ChatMessage } from './model/chat-message.model';
import { ChatService } from './services/chat.service';
// import { MESSAGES } from '../assets/data/mock-data/mock-data.component';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ChatService]
})
export class AppComponent {

constructor(
   public router: Router,
   public authService: AuthService,
  ) {}





}
