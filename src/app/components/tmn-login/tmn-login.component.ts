import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tmn-login',
  templateUrl: './tmn-login.component.html',
  styleUrls: ['./tmn-login.component.sass']
})
export class TmnLoginComponent implements OnInit {

  company: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSigninTerminal() {
    this.router.navigate(['/rating', this.company]);
  }

}
