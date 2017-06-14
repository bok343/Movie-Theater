import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent }  from './movie-detail.component';
import { MoviesComponent } from './movies.component';
import { MovieTimeComponent } from './movie-time.component';
import { MovieReserveComponent } from './movie-reserve.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component:  MoviesComponent},
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'time/:id', component: MovieTimeComponent},
  { path: 'reserve/:id/:date/:time', component: MovieReserveComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}