import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardStatusComponent } from './card-status/card-status.component';
import { CardEpisodesComponent } from './card-episodes/card-episodes.component';
import { CardLocationsComponent } from './card-locations/card-locations.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo: "app.component.html"},
  {path:"characters", component:CardStatusComponent},
  {path:"episodes", component:CardEpisodesComponent},
  {path:"locations", component:CardLocationsComponent},
  {path:"**", pathMatch:'full', redirectTo:"app.component.html"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
