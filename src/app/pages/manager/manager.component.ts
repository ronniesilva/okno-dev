import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../providers/auth.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass']
})
export class ManagerComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User UID: ' + user.uid);
        console.log('User email: ' + user.email);
        console.log('User displayname: ' + user.displayName);
      } else {
        console.log('User is sign out');
        this.router.navigate(['/home']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
