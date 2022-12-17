import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BrowseEventsComponent } from './browse-events/browse-events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { LoginComponent } from './login/login.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowEventComponent } from './show-event/show-event.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'show-event/:id', component: ShowEventComponent },
  { path: 'browse-events', component: BrowseEventsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'my-events/:username', component: MyEventsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'edit-event/:id', component: EditEventComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
