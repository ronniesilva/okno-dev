import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// firebase
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

import { AuthService } from '../../providers/auth.service';
import { UsersService } from '../../providers/users.service';
import { User } from './../../interfaces/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  users: Observable<User[] | null>;
  email: string;
  passwd: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    public usersService: UsersService
  ) { }

  ngOnInit() {
  }

  onSignin() {
    this.users = this.usersService.getUserEmail(this.email);
    this.users.subscribe((usersData: User[]) => {
      if (usersData[0] !== undefined) {
        console.log('Existe usuario cadastrado:' + usersData[0].email);
        console.log('Tendando com user email:' + this.email);
        console.log('Tendando com user passwd:' + this.passwd);
        this.authService.signinWithEmail(this.email, this.passwd)
          .then((isLogged: boolean) => {
            if (isLogged) {
              console.log('usuario autenticado. Redirecionando para o manager ...');
              this.router.navigate(['manager']);
            }
          }).catch((error: any) => {
            console.log(error);
          });
      } else {
        console.log('Login Não Achou');
        this.users.subscribe().unsubscribe();
      }
    });
  }

}
