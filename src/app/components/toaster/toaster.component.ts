import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
public flag= true;
content?: string;
  constructor() { }

  ngOnInit() {
  }


showError( message: string  , style: boolean) {
this.content = message;


}
}
