import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { EventsApiService } from '../services/events-api.service';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.less'],
  providers: [ EventsApiService ]
})
export class EventdetailComponent implements OnInit {

  eventId:String = "";
  event:any = null;

  constructor(private eventsApiService:EventsApiService, 
              private titleService:Title,
              private route: ActivatedRoute,
              private router: Router) 
              { }

    ngOnInit() {
      this.eventId = this.route.snapshot.paramMap.get('eventid');
      this.event = this.eventsApiService.getEvent(this.eventId);
      this.titleService.setTitle("Event List: Event " + this.eventId);
    }

}
