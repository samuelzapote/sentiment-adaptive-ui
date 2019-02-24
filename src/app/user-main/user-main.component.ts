import { Component } from '@angular/core';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],
})
export class UserMainComponent {
    public interacting: boolean = false;
    public actionsCollection: object[] = [
      {
        type: 'image',
        question: 'How are you feeling?',
        options: ['good', 'okay', 'great', 'bad', 'eh']
      },
      {
        type: 'text',
        question: 'Is it enjoyable outside?',
        options: ['yeah', 'not really', 'Its nice']
      },
      {
        type: 'dynamic',
        question: 'This morning was?',
        options: ['alright', 'good', 'pretty bad', 'okay']
      },
      {
        type: 'visual',
        question: 'Im really liking these colors',
        options: ['stressed', 'happy', 'calm', 'angry']
      }
    ];
  
    constructor() {
        
    }

    onInitSession() {
        this.interacting = !this.interacting;
    };
}