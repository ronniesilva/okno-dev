import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      passwd1: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      passwd2: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
    });
  }

  onSignup() {
    console.log('cadastrar clicked');

    this.authService.addUserAuth(this.form.value.email, this.form.value.passwd1)
      .then((userAuth: firebase.auth.UserCredential) => {

        // Cria o usuário
        const user: User = {
          uid: userAuth.user.uid,
          email: userAuth.user.email,
          passwd: this.form.value.passwd1
        };

        // Insere o usuário
        this.usersService.addUserId(user)
          .then(ref => {
            console.log('Usuario ' + this.form.value.email + ' adicionado com sucesso');
            this.authService.signinWithEmail(this.form.value.email, this.form.value.passwd1)
            .then(() => {
              console.log('Usuario logado com sucesso');
              this.form.reset();
              this.router.navigate(['/manager', user.uid]);
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
