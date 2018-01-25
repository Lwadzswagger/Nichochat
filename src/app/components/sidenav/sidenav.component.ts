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
    // {name: 'Samantha', surname: 'Tucker'},
    // {name: 'Dave', surname: 'Stallone'},
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
    // {name: 'Nicholas', surname: 'Smith'},
  ];






  inbox = [
    {name: 'Dave', surname: 'Stallone', badge: 3},
    {name: 'Gibson', surname: 'Crimson', badge: 2},
    {name: 'Jane', surname: 'Van De Me...', badge: 4},
    {name: 'Vamp', surname: 'Personal', badge: 32},
    {name: 'Lourel', surname: 'River', badge: 6},
    {name: 'Bean', surname: 'Lighthouse', badge: 1},
    {name: 'Gert', surname: 'Pembertin', badge: 5},
    {name: 'Richards', surname: 'Mock', badge: 37},
  ];

  eCop = [
    {name: 'Nicholas', surname: 'Smith'},
    {name: 'Nicholas', surname: 'Smith'},
    {name: 'Nicholas', surname: 'Smith'},
    {name: 'Nicholas', surname: 'Smith'},
    {name: 'Nicholas', surname: 'Smith'},
    {name: 'Nicholas', surname: 'Smith'}
  ];

  groups = [
    {name: 'Think Rise'},
    {name: 'Aliens'},
    {name: 'CapaCiTi'},
    {name: 'Lending'},
    {name: 'AHN'},
    {name: 'Carrot'}
  ];

 constructor() { }

  ngOnInit() {
  }

}
