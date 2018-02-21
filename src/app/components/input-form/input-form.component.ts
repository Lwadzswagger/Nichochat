import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { error } from 'selenium-webdriver';
import { AppError } from '../../model/app-errors';
import { BadInput } from '../../model/bad-input';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  posts: any;
  constructor(private chatservice: ChatService ) { }

  ngOnInit() {
  }

  sendMsg(input: HTMLInputElement) {
this.chatservice.sendMessage(input.value);
input.value = '';
  }
}
