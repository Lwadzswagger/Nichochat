import { Injectable, OnInit } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';
// import { AngularFireList } from 'angularfire2/database-deprecated';
// import { Message } from '../model/message';
// import { ChatroomComponent } from '../components/chatroom/chatroom.component';
// import {  MESSAGES } from '../../assets/data/mock-data/mock-data.component';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../model/app-errors';
// import {}
import { NotFoundError } from '../model/not-found-error';
import { BadInput } from '../model/bad-input';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {


  constructor( private url: string, private http: Http) { }



  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
  }


  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response.json())
      .catch(this.handleError);
  }


  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .map(response => response.json())
    .catch(this.handleError);
  }

  delete(chatroom) {
    return this.http.delete(this.url + '/' + chatroom.id)
    .map(response => response.json())
    .catch(this.handleError);
  }



private handleError(error: Response) {
  if (error.status === 400) {
    return Observable.throw(new BadInput(error.json()));
  }
  if (error.status === 404) {
    return Observable.throw(new NotFoundError(error.json()));
  }else {
    return Observable.throw(new AppError(error.json()));  }
}
}







