import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { User } from '@firebase/auth-types';
import { CompaniesService } from '../../providers/companies.service';
import { UsersService } from '../../providers/users.service';

@Component({
  selector: 'app-mng-dashboard',
  templateUrl: './mng-dashboard.component.html',
  styleUrls: ['./mng-dashboard.component.sass']
})
export class MngDashboardComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public userUid: string;
  public currentUser: User;
  public companies$: Observable<{}[]>;

  constructor(
    public companiesService: CompaniesService,
    private route: ActivatedRoute,
    public usersService: UsersService
  ) {
  }

  ngOnInit() {
    console.log('MngDashboard onInit()');

    const id = this.route.snapshot.paramMap.get('id');
    console.log('MngDashboard paramMap id ' + id);

    this.companies$ = this.usersService.usersRef.doc(id)
      .collection('companies').valueChanges();
  }

  ngOnDestroy(): void {
    console.log('MngDashboard onDestroy()');
  }

}
