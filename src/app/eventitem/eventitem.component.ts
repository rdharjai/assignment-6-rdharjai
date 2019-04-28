import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventitem',
  templateUrl: './eventitem.component.html',
  styleUrls: ['./eventitem.component.less']
})
export class EventitemComponent implements OnInit {

  @Input() event;

  constructor() { }

  ngOnInit() {
  }

}
