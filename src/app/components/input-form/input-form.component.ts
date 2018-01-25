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
const post = {title : input.value};
input.value = '';


// this.http.post(,JSON.stringify(post))
// .subscribe(response => {
// post['id'] = response.json().id;
// });

    this.chatservice.create(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // code for my validated input
        // tslint:disable-next-line:curly
        } else throw error;
      });
  }

}
