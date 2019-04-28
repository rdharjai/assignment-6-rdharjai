import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { EventsApiService } from '../services/events-api.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.less'],
  providers: [EventsApiService]
})
export class EventlistComponent implements OnInit {

  constructor(private eventsApiService: EventsApiService,
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router) { }

  eventsList = null;
  listType: String = "";

  ngOnInit() {
    this.eventsList = this.eventsApiService.getAllEvents();
    this.listType = this.route.snapshot.data['listtype'];
    switch (this.listType) {
      case 'home': {
        this.titleService.setTitle("Event List");
        break;
      }
      case 'allevents': {
        this.titleService.setTitle("Event List: Browse All Events");
        break;
      }
      default: {
        this.titleService.setTitle("Event List");
        break;
      }
    }
  }

}
