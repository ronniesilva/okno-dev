import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tmn-login',
  templateUrl: './tmn-login.component.html',
  styleUrls: ['./tmn-login.component.sass']
})
export class TmnLoginComponent implements OnInit {

  form: FormGroup;

  company: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      company: [null, [Validators.required]],
      passwd: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
    });
  }

  onSubmit() {
    this.router.navigate(['/rating', this.form.value.company]);
  }

}
