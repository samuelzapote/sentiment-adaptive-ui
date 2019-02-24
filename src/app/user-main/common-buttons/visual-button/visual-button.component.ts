import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-visual-button',
  templateUrl: './visual-button.component.html',
  styleUrls: ['./visual-button.component.css']
})
export class VisualButtonComponent implements OnInit {
  @Output() actionComplete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onActionComplete() {
    this.actionComplete.emit(null);
  }
}
