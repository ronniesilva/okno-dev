import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }


  // insere usuario no AUTH
  addUserAuth(email: string, passwd: string): Promise<any> {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, passwd)
      .catch();
  }

  // efetua logout no AUTH
  logout(): Promise<any> {
    console.log('Auth: authLogout()');
    return this.angularFireAuth.auth
      .signOut()
      .catch(err => {
        console.log('erro: ' + err);
      });
  }

  isAuthenticated() {
    const user = this.angularFireAuth.authState;
    return user.subscribe(res => {
      if (res !== null) {
        return true;
      } else {
        return false;
      }
    });
  }
  // autentica usuario e senha no AUTH
  signinWithEmail(email: string, password: string): Promise<boolean> {
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        // console.log('Erro na autenticacao: ' + err);
      });
  }


}
