import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Movie } from './movie';
import { MovieTime } from './movie-time';
import { MovieReserve } from './movie-reserve';

import { MOVIESITS } from './mock-movie-sits';

import { MovieService } from './movie.service';
@Component({
  selector: 'movie-reserve',
  templateUrl: './movie-reserve.component.html',
  styleUrls: ['./movie-reserve.component.css']
})
export class MovieReserveComponent implements OnInit{
    movie: Movie;
    movieTime: MovieTime;
    movieReserve: MovieReserve;
    onSelectedsitNumber = 0;
    testNumber = 0;
    movieSits = MOVIESITS;
    

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
      .switchMap((params: Params) => this.movieService.getMovieReserve(+params['id'],params['date'],params['time']))
      .subscribe(movieReserve => this.movieReserve = movieReserve
      );   
    }

    setSit() {


    }

    getSit(sit: number): boolean{
      if (sit == 2){
        return false;
      }else{
        return true;
      }
    }

    havePeople(sit: number): boolean{
      for(var i in this.movieReserve.sit){
        if (this.movieReserve.sit[i] == sit){
          return true;
        }        
      }
      return false;
    }

    reserve(sitIndex: number) {
      var hadReserve = 0;
      if (this.onSelectedsitNumber < 4){
        for(var i in this.movieReserve.sit){
          if (this.movieReserve.sit[i] == sitIndex){   
            hadReserve = 1;
          }else {
            
          }
        }  
        if (hadReserve == 0){
          this.movieReserve.sit.push(sitIndex);
          this.onSelectedsitNumber = this.onSelectedsitNumber + 1;
        }
      }
    }

    goPerson() {
      

    }

    goBack(): void {
    this.location.back();
    }
}    