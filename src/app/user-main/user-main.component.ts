import { Component } from '@angular/core';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],
})
export class UserMainComponent {
    public interacting: boolean = false;
  
    constructor() {
        
    }

    onInitSession() {
        this.interacting = !this.interacting;
    };
}