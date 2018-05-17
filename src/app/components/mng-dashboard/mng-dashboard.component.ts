import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from 'firebase';
import { CompaniesService } from '../../providers/companies.service';
import { UsersService } from '../../providers/users.service';

@Component({
  selector: 'app-mng-dashboard',
  templateUrl: './mng-dashboard.component.html',
  styleUrls: ['./mng-dashboard.component.sass']
})
export class MngDashboardComponent implements OnInit {

  userUid = 'Om8jvAvm6GWhhDP3qZFQW6NokQQ2';
  currentUser: User;
  companies$: Observable<{}[]>;

  constructor(
    public companiesService: CompaniesService,
    public usersService: UsersService
  ) { }

  ngOnInit() {
    // Recuperando um documento específico - Usuário
    this.usersService.usersRef.doc(this.userUid)
      .valueChanges()
      .subscribe((user: User) => {
        this.currentUser = user;
      });

    this.companies$ = this.usersService.usersRef.doc(this.userUid)
      .collection('companies').valueChanges();
  }

}
