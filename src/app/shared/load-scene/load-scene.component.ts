import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { state, style } from '@angular/animations';

@Component({
  selector: 'cured-load-scene',
  templateUrl: './load-scene.component.html',
  styleUrls: ['./load-scene.component.css'],
})
export class LoadSceneComponent implements OnInit {
  @HostBinding('class') private classes = 'jumbotron';
  @Input() public title: string;
  @Input() public lead: string;

  constructor() {}

  ngOnInit() {}
}
