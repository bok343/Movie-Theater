import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Movie } from './movie';
import { MovieTime } from './movie-time';
import { MovieService } from './movie.service';
@Component({
  selector: 'movie-time',
  templateUrl: './movie-time.component.html',
  styleUrls: ['./movie-time.component.css']
})
export class MovieTimeComponent implements OnInit{
    movie: Movie;
    movieTime: MovieTime;
    selectedMovieID: MovieTime;
    selectedMovieDate : String;
    selectedMovieTime : String;

    constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) {}

    ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
      .subscribe(movie => this.movie = movie
      );
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovieTime(+params['id']))
      .subscribe(movieTime => this.movieTime = movieTime
      );      
    }

    onSelect(sData : String, sTime : String): void {
      this.selectedMovieDate = sData;
      this.selectedMovieTime = sTime;
    }

    gotoReserve(): void {
      this.router.navigate(['/reserve', this.movieTime.id, this.selectedMovieDate, this.selectedMovieTime]);
    }

    goBack(): void {
    this.location.back();
    }
}    