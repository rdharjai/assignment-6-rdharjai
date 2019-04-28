import { Component, OnInit } from '@angular/core';
import { EventsApiService } from '../services/events-api.service';

@Component({
  selector: 'app-starevent',
  templateUrl: './starevent.component.html',
  styleUrls: ['./starevent.component.less'],
  providers: [ EventsApiService ]
})
export class StareventComponent implements OnInit {

  constructor(private eventsApiService:EventsApiService) { }

  eventsList = null;

  ngOnInit() {
    this.eventsList = this.eventsApiService.getAllEvents();
  }

}
