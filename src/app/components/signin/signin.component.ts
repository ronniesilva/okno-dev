import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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

  form: FormGroup;
  users: Observable<User[] | null>;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public usersService: UsersService
  ) { }

  ngOnInit() {
    /*
    // Primeira forma de criar formularios
    this.form = new FormGroup({
      email: new FormControl(null),
      passwd: new FormControl(null)
    });
    */

    // Segunda forma de criar forms
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      passwd: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
    });

  }

  onSubmit() {
    this.users = this.usersService.getUserEmail(this.form.value.email);
    this.users.subscribe((usersData: User[]) => {
      if (usersData[0] !== undefined) {
        console.log('Existe usuario cadastrado:' + usersData[0].email);
        console.log('Acessando com:' + usersData[0].uid);
        this.authService.signinWithEmail(this.form.value.email, this.form.value.passwd)
          .then((isLogged: boolean) => {
            if (isLogged) {
              console.log('usuario autenticado. Redirecionando para o manager ...');

              // Limpar o formulario
              this.form.reset();

              // Redirecionar para a pagina de Manager
              this.router.navigate(['manager', usersData[0].uid]);
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
