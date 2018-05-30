import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CompaniesService } from '../../providers/companies.service';
import { Company } from '../../interfaces/company';
import { UsersService } from '../../providers/users.service';

@Component({
  selector: 'app-mng-company-add',
  templateUrl: './mng-company-add.component.html',
  styleUrls: ['./mng-company-add.component.sass']
})
export class MngCompanyAddComponent implements OnInit, OnDestroy {

  private userSubscription$: Subscription;
  public userUid: string;
  private company: string;
  private passwd: string;

  constructor(
    private router: Router,
    public companiesService: CompaniesService,
    public userService: UsersService,
  ) { }

  ngOnInit() {
    console.log('MngCompanyAdd onInit()');
    this.userSubscription$ = this.userService.currentUser$.subscribe(user => {
      console.log('MngCompanyAdd userId = ' + user.uid);
      this.userUid = user.uid;
    });
  }

  companyAdd() {

    // console.log('Inserindo company Name: ' + company.name);

    const company: Company = {
      name: this.company,
      passwd: this.passwd,
      owner: this.userUid
    };

    console.log('Inserindo company Name: ' + company.name);
    console.log('Inserindo company passwd: ' + company.passwd);
    console.log('Inserindo company owner: ' + company.owner);

    // verifica se a empresa existe
    this.companiesService.checkCompanyDoc(company.name)
      .then(achou => {
        if (!achou) {

          // Cadastra a empresa
          this.companiesService.setCompanyId(company)
            .then(doc => {
              console.log('Cadastrado com sucesso!');
              this.router.navigate(['/manager', this.userUid]);
            })
            .catch(err => {
              console.log('[ERRO]:' + err);
            });

        } else {
          console.log('Esta empresa já existe');
        }
      })
      .catch(err => console.log('ERROR' + err));
  }


  ngOnDestroy(): void {
    console.log('MngCompanyAdd onDestroy()');
    this.userSubscription$.unsubscribe();
  }
}
