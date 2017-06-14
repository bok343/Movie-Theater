import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieTimeComponent } from './movie-time.component';
import { MovieReserveComponent } from './movie-reserve.component';
import { MovieService } from './movie.service'; 


import { AppRoutingModule } from './app-routing.moudle';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MoviesComponent,
    MovieTimeComponent,
    MovieReserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
