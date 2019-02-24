import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interact-session',
  templateUrl: './interact-session.component.html',
  styleUrls: ['./interact-session.component.css']
})
export class InteractSessionComponent implements OnInit {
  public dynamicAction: boolean = true;
  public imageAction: boolean = true;
  public textAction: boolean = true;
  public visualAction: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
