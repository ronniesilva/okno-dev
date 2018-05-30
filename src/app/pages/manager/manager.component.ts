import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../providers/auth.service';
import { Observable, Subscription } from 'rxjs';

import { UsersService } from './../../providers/users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass']
})
export class ManagerComponent implements OnInit, OnDestroy {

  private subsRoute$: Subscription;
  public idParams: string;
  public currentUser: User;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public userService: UsersService,
  ) {
    this.subsRoute$ = this.route.firstChild.params.subscribe((params: Params) => {
      console.log('params ID ' + params['id']);
      this.idParams = params['id'];
    });

  }

  ngOnInit() {
    console.log('Manager onInit()');

    this.angularFireAuth.auth.onAuthStateChanged(auth => {
      if (auth) {
        console.log('Manager Auth User UID: ' + auth.uid);
      } else {
        console.log('User is sign out');
        this.router.navigate(['/']);
      }
    });

    this.userService.getUserId(this.idParams)
    .subscribe((user: User) => {
      console.log('currentUser.uid ' + user.uid);
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    console.log('Manager onDestroy()');
    this.subsRoute$.unsubscribe();
  }

  logout() {
    console.log('Manager Logout()');
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
