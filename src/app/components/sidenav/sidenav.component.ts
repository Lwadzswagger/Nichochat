import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {




  friends = [
    {name: 'Simon', surname: 'Tes'},
    {name: 'Steve', surname: 'MAthebula'},
    {name: 'Robin', surname: 'Zuma'},
    {name: 'Sizler', surname: 'Obama'},
    {name: 'Nicole', surname: 'Washington'},
    {name: 'Alysa', surname: 'Dean'},
    {name: 'Samantha', surname: 'Tucker'},
    {name: 'Dave', surname: 'Stallone'},
    // {name: 'Gibson', surname: 'Crimson'},
    // {name: 'Jane', surname: 'Love'},
    // {name: 'Vamp', surname: 'Personal'},
    // {name: 'Lourel', surname: 'River'},
    // {name: 'Bean', surname: 'Lighthouse'},
    // {name: 'Conner', surname: 'Pembertin'},
    // {name: 'Richards', surname: 'Mock'},
    // {name: 'Sam', surname: 'Green'},
    // {name: 'Nicholas', surname: 'Smith'},
    // {name: 'Nicholas', surname: 'Smith'},
    // {name: 'Nicholas', surname: 'Smith'},
    // {name: 'Nicholas', surname: 'Smith'},
    // {name: 'Nicholas', surname: 'Smith'},
    // {name: 'Nicholas', surname: 'Smith'},
    // {name: 'Nicholas', surname: 'Smith'},
    // {name: 'Nicholas', surname: 'Smith'},
    // {name: 'Nicholas', surname: 'Smith'},
    {name: 'Nicholas', surname: 'Smith'},
  ];
 constructor() { }

  ngOnInit() {
  }

}
