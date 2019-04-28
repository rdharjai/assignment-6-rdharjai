import { Injectable } from '@angular/core';
import * as eventsData from '../../data/eventsData.json';

@Injectable()
export class EventsApiService {

  constructor() { }

  getAllEvents() {
    return eventsData.default;
  }

  getEvent(eventId:String) {
    return eventsData.default.filter(  function(event) {
      return event._id === eventId;
    })[0];
  }

  // getStarEvent() {
  //   let starEvent = null;
  //   for(event in eventsData.default) {

  //   }

  // }


}
