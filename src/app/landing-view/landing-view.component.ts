import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  public loggingIn: boolean = true;
  public registering: boolean = false;

  public loginForm = this.fb.group({
    accountType: [''],
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(formData: FormGroup) {
    console.log(formData);
    this.router.navigate(['/control']);
  };

  initRegisterMode() {
    this.loggingIn = false;
    this.registering = true;
  };

  initLoginMode() {
    this.loggingIn = true;
    this.registering = false;
  };
}
