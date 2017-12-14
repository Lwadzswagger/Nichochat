import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  constructor(protected router: Router, public authserve: AuthService) { }

  ngOnInit() {

  }


  // logGoogle() {
    // this.authserve.loginWithGoogle();
  // }
}
