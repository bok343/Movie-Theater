import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Movie } from './movie';
import { MovieService } from './movie.service';
@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit{
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
      .subscribe(movie => this.movie = movie
    );
  }

  gotoTime(): void {
    this.router.navigate(['/time', this.movie.id]);
  }

  goBack(): void {
    this.location.back();
  }
}