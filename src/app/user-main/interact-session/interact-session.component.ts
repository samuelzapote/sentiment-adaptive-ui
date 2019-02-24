import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interact-session',
  templateUrl: './interact-session.component.html',
  styleUrls: ['./interact-session.component.css']
})
export class InteractSessionComponent implements OnInit {
  public actionsOrder: string[] = ['dynamic', 'image', 'text', 'visual'];
  public actionIndex: number = 0;
  public currentAction: string = '';

  constructor() { }

  ngOnInit() {
    this.runDeterminedAction();
  }

  runDeterminedAction() {
    this.currentAction = this.actionsOrder[this.actionIndex];
  };

  executeNextAction() {
    if (this.actionIndex >= this.actionsOrder.length) {
      console.log('Actions Done!');
    } else {
      this.actionIndex = this.actionIndex + 1;
      this.runDeterminedAction();
    };
  };
}
