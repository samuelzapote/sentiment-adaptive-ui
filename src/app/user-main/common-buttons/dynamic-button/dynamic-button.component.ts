import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.css']
})
export class DynamicButtonComponent implements OnInit {
  @Output() actionComplete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onActionComplete() {
    this.actionComplete.emit(null);
  }
}
