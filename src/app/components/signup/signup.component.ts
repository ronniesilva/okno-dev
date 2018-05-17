import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { AuthService } from './../../providers/auth.service';
import { UsersService } from '../../providers/users.service';
import { User } from './../../interfaces/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  email: string;
  passwd1: string;
  passwd2: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  onSignup() {
    console.log('cadastrar clicked');

    this.authService.addUserAuth(this.email, this.passwd1)
      .then((userAuth: firebase.auth.UserCredential) => {

        // Cria o usuário
        const user: User = {
          uid: userAuth.user.uid,
          email: userAuth.user.email,
          passwd: this.passwd1
        };

        // Insere o usuário
        this.usersService.addUserId(user)
          .then(ref => {
            console.log('Usuario ' + this.email + ' adicionado com sucesso');
            this.authService.signinWithEmail(this.email, this.passwd1)
            .then(() => {
              console.log('Usuario logado com sucesso');
              // this.router.navigate(['/manager', user.uid]);
              })
              .catch(err => console.log('[erro]: ' + err));
          })
          .catch(error => {
            console.log('error: ' + error);
          });
      })
      .catch(err => console.log('[ERRO]: ' + err));
  }

}
