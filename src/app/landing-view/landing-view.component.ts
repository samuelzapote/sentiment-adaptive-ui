import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
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
}
