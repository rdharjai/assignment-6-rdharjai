import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { StareventComponent } from './starevent/starevent.component';
import { EventitemComponent } from './eventitem/eventitem.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';

import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: '', redirectTo: '/eventlist', pathMatch: 'full'},
  { path: 'eventlist', component: EventlistComponent, data: { listtype: 'home' } },
  { path: 'allevents', component: EventlistComponent, data: { listtype: 'allevents' } },
  { path: 'eventdetail/:eventid', component: EventdetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventlistComponent,
    StareventComponent,
    EventitemComponent,
    EventdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
