import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent   {
  messages = [

  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora aliquam exercitationem voluptatem? Sapiente odit, sit at atque, impedit illo libero adipisci rem est maiores, distinctio placeat totam voluptas ex Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Meep', surname: 'Morgan', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Sin', surname: 'Tesmane', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: true},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  // tslint:disable-next-line:max-line-length
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
  {name: 'Simon', surname: 'Tes', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa voluptate, eveniet exercitationem temporibus nobis magnam, minus, beatae numquam illo suscipit a saepe corrupti tempora animi distinctio quam ea iste.', time: '12:45', mine: false},
];

  friends = [
  {name: 'Bean', surname: 'Lighthouse'},
  {name: 'Conner', surname: 'Pembertin'},
  {name: 'Richards', surname: 'Mock'},
  {name: 'Sam', surname: 'Green'},
  {name: 'Nicholas', surname: 'Smith'},
  {name: 'Nicholas', surname: 'Smith'},
  {name: 'Nicholas', surname: 'Smith'},
  {name: 'Nicholas', surname: 'Smith'},
  {name: 'Nicholas', surname: 'Smith'},
  {name: 'Nicholas', surname: 'Smith'},
  {name: 'Nicholas', surname: 'Smith'},
  {name: 'Nicholas', surname: 'Smith'},
  {name: 'Nicholas', surname: 'Smith'},
  {name: 'Nicholas', surname: 'Smith'},
];

constructor(private chatservice: ChatService) {

  // this.chatservice.getTimeStamp();
    }

}
